// libs
import { View, FlatList } from "react-native";
import React from "react";
// layouts
import MovieCard from "@/components/MovieCard";
// others
import { navigate } from "@/navigation/rootNavigation";

const MovieCategory = ({ movieList, testID }) => (
  <View>
    <FlatList
      data={movieList || []}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      testID={testID}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <MovieCard
          testID={item.id}
          poster_path={item.poster_path}
          onPress={() => navigate("MovieDetails", item.id)}
        />
      )}
    />
  </View>
);

export default MovieCategory;
