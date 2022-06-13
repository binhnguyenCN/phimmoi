// libs
import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
// layouts
import Screen from "@/components/Layout";
import Text from "@/components/Text";
// import Button from "@/components/Button";
import ActivityIndicator from "@/components/ActivityIndicator";
import Carousel from "@/mains/Carousel";
import PopularityCategory from "@/mains/PopularityCategory";
import TopRatedCategory from "@/mains/TopRatedCategory";
// import TrendingCategory from "@/mains/TrendingCategory";
// constants
import colors from "@/constants/colors";
// others
import useApi from "@/hooks/useApi";
import movieApi from "@/api/movies";
import movieList from "@/mock/movies";

const HomeScreen = () => {
  const {
    error,
    loading
    // data: movies,
    // request: loadMovies
  } = useApi(movieApi.getHomeData);
  useEffect(() => {
    // loadMovies();
  }, []);
  const movies = {
    "Popular Movies": movieList.results,
    "Top Rated Movies": movieList.results,
    "Trending Movies": movieList.results
  };
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <Text>Could not retrieve the listings.</Text>
            {/* <Button title="Retry" onPress={loadMovies} /> */}
          </>
        )}
        {movies && (
          <ScrollView testID="TestId__homescreen">
            <Carousel movies={movies["Popular Movies"].slice(0, 5)} />
            <PopularityCategory movies={movies["Popular Movies"]} />
            <TopRatedCategory movies={movies["Top Rated Movies"]} />
            {/* <TrendingCategory movies={movies["Trending Movies"]} /> */}
          </ScrollView>
        )}
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.black
  }
});
export default HomeScreen;
