import React, { useState } from "react";
import {
  Modal,
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

interface Props {
  visible: boolean;
  onClose: () => void;
  movies: any[];
  navigation: {
    navigate: (screen: string) => void;
  };
}

export function SearchModal({ visible, onClose, movies, navigation }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    if (!text.trim()) {
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie["#TITLE"].toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="times" size={20} color="#fff" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search Movies..."
          value={searchTerm}
          onChangeText={handleSearch}
          style={styles.searchInput}
        />
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item["#IMDB_ID"]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.movieItem}
              onPress={() => {
                navigation.navigate("Movie", {
                  id: item["#IMDB_ID"],
                });
                onClose();
              }}
            >
              <Image
                source={{ uri: item["#IMG_POSTER"] }}
                style={styles.movieIcon}
              />
              <Text style={styles.movieText}>{item["#TITLE"]}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: "#555",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 15,
  },

  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: "#555",
  },
  movieIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  movieText: {
    flex: 1,
    color: "#ccc",
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});
