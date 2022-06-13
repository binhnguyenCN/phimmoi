// libs
import { FlatList, Platform, Text, View } from "react-native";
import React from "react";
// layouts
import MovieCard from "@/components/MovieCard";
// others
import { categories } from "@/dataSource/index";
// styles
import styles from "./styles";

const RelatedCategory = ({ movies, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{categories.related.title}</Text>
    <View>
      <FlatList
        data={movies || []}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <MovieCard
            testID={item.id}
            poster_path={item.poster_path}
            onPress={() => {
              navigation.push("MovieDetails", item.id);
            }}
            styleProp={{
              alignItems: "center",
              paddingHorizontal: Platform.OS === "ios" ? 14 : 5,
              paddingVertical: 10,
              marginHorizontal: 0
            }}
          />
        )}
      />
    </View>
  </View>
);

export default RelatedCategory;
