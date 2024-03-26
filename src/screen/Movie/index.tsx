import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/FontAwesome5";
import { styles } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "../../../api/services/movies";

export interface Props {
  navigation: {
    navigate: (screen: string, params: { id: string }) => void;
  };
}

export const Movie = (props: Props) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", { id: props.route.params.id }],
    queryFn: () => fetchMovie(props.route.params.id),
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const actors = movie["#ACTORS"].split(", ");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: movie?.["#IMG_POSTER"] }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        >
          <View style={styles.topRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("Home")}
            >
              <Icon name="angle-left" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="ellipsis-v" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View>
        <View style={styles.row}>
          <Text style={styles.matchText}>95% match</Text>
          <Text style={styles.infoText}>{movie["#YEAR"]}</Text>
          <Text style={styles.infoText}>2h 49m</Text>
          <Text style={styles.infoText}>#{movie["#RANK"]}</Text>
        </View>
        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Top Cast</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.castScrollView}
        >
          {actors.map((actor, index) => (
            <View key={index} style={styles.actorContainer}>
              <TouchableOpacity style={styles.actorIcon}>
                <Icon name="user" size={20} color="white" />
              </TouchableOpacity>
              <Text style={styles.actorName}>{actor}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
