import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useQuery } from "@tanstack/react-query";
import { fetch10Movies } from "../../../api/services/movies";
import Icon from "@expo/vector-icons/FontAwesome5";
import { styles } from "./styles";
import { useMoviestore } from "../../store";
import { SearchModal } from "../../components/SearchModal";

export interface Props {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export const Home = (props: Props) => {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetch10Movies,
    staleTime: Infinity,
  });
  const { backgroundMovie, changeMovie }: any = useMoviestore((state) => ({
    backgroundMovie: state.movie,
    changeMovie: state.setMovie,
  }));

  const handleChangeMovie = useCallback((id: string) => {
    changeMovie(id);
  }, []);

  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundMovie?.["#IMG_POSTER"] }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        >
          <View style={styles.topRow}>
            <TouchableOpacity style={styles.button}>
              <Icon name="user" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setSearchModalVisible(true)}
            >
              <Icon name="search" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomRow}>
            <TouchableOpacity
              style={styles.textButton}
              onPress={() =>
                props.navigation.navigate("Movie", {
                  id: backgroundMovie["#IMDB_ID"],
                })
              }
            >
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.textButton}
              onPress={() =>
                props.navigation.navigate("Movie", {
                  id: backgroundMovie["#IMDB_ID"],
                })
              }
            >
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <Text style={styles.title}>Trending Now</Text>
      <FlatList
        data={movies}
        horizontal
        keyExtractor={(item, index) => item["#IMDB_ID"] + index}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPressIn={() => handleChangeMovie(item["#IMDB_ID"])}
          >
            <ImageBackground
              source={{ uri: item["#IMG_POSTER"] }}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        )}
      />
      <SearchModal
        visible={isSearchModalVisible}
        onClose={() => setSearchModalVisible(false)}
        movies={movies}
        navigation={props.navigation}
      />
    </View>
  );
};
