// libs
import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
// layouts
import Screen from "@/components/Layout";
import Text from "@/components/Text";
import Button from "@/components/Button";
// import ActivityIndicator from "@/components/ActivityIndicator";
import Carousel from "@/mains/Carousel";
import PopularityCategory from "@/mains/PopularityCategory";
import TopRatedCategory from "@/mains/TopRatedCategory";
// constants
import colors from "@/constants/colors";
// others
import useApi from "@/hooks/useApi";
import movieApi from "@/api/movies";
import TrendingCategory from "@/mains/TrendingCategory";

const HomeScreen = () => {
  const {
    data: movies,
    error,
    // loading,
    request: loadMovies
  } = useApi(movieApi.getHomeData);
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      {/* <ActivityIndicator visible={loading} /> */}
      <Screen style={styles.screen}>
        {error && (
          <>
            <Text>Could not retrieve the listings.</Text>
            <Button title="Retry" onPress={loadMovies} />
          </>
        )}
        {movies.length !== 0 && (
          <ScrollView>
            <Carousel movies={movies["Popular Movies"].slice(0, 5)} />
            <PopularityCategory movies={movies["Popular Movies"]} />
            <TopRatedCategory movies={movies["Top Rated Movies"]} />
            <TrendingCategory movies={movies["Trending Movies"]} />
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
