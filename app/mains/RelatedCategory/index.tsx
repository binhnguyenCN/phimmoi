// libs
import { FlatList, Text, View } from "react-native";
import React from "react";
// layouts
import MovieCard from "@/components/MovieCard";
// styles
import styles from "./styles";

const RelatedCategory = ({ movies, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>MORE LIKE THIS</Text>
    <FlatList
      data={movies || []}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <MovieCard
          poster_path={item.poster_path}
          onPress={() => {
            navigation.push("MovieDetails", item.id);
          }}
        />
      )}
    />
  </View>
);

export default RelatedCategory;
