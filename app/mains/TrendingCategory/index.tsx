// libs
import React from "react";
import { View, StyleSheet } from "react-native";
// layouts
import Text from "@/components/Text";
import MovieCategory from "@/components/MovieCategory";
// others
import { categories } from "@/dataSource/ index";
import colors from "@/constants/colors";

const TrendingCategory = ({ movies }) => (
  <View>
    <Text style={styles.title}>{categories.trending.title}</Text>
    <MovieCategory movieList={movies} />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: colors.white,
    marginHorizontal: 5
  }
});
export default TrendingCategory;
