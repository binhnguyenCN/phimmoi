// libs
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Pressable, Linking } from "react-native";
import { Image } from "react-native-expo-image-cache";
// layouts
import Text from "@/components/Text";
import Button from "@/components/Button";
// import ActivityIndicator from "@/components/ActivityIndicator";
import Screen from "@/components/Layout";
// others
import colors from "@/constants/colors";
import { navigate } from "@/navigation/rootNavigation";
import { imageOriginal, imageResize } from "@/utils/images";
import useApi from "@/hooks/useApi";
import movieApi from "@/api/movies";
import RelatedCategory from "@/mains/RelatedCategory";

const MovieDetailScreen = ({ route, navigation }) => {
  const movieId: number = route.params;
  const {
    data: movie,
    error,
    // loading,
    request: loadMovie
  } = useApi(movieApi.getMovieDetails);
  const [showStarring, setShowStarring] = useState(false);
  useEffect(() => {
    loadMovie(movieId.toString());
  }, []);

  return (
    <>
      {/* <ActivityIndicator visible={loading} /> */}
      {error && (
        <Screen>
          <Text>Not found</Text>
          <Button title="Retry" onPress={loadMovie} />
        </Screen>
      )}
      {movie.length !== 0 && (
        <Screen>
          <Image
            style={styles.image}
            uri={imageOriginal(movie?.data.poster_path)}
            preview={{ uri: imageResize(movie?.data.poster_path, "w200") }}
            tint="light"
          />
          <ScrollView style={styles.screen}>
            <Text style={styles.title}>{movie?.data.title}</Text>
            <Text style={styles.year}>
              Release date: {movie?.data.release_date}
            </Text>
            <View style={styles.ageContainer}>
              <Text style={styles.age}>
                {movie?.data.adult ? "+18" : "+13"}
              </Text>
            </View>
            <Text style={styles.overview}>{movie?.data.overview}</Text>
            <View style={styles.starringContainer}>
              <Text style={styles.starring}>
                Starring:
                {showStarring || movie?.casts.length <= 5
                  ? movie?.casts.map((starring) => starring.name).join(", ")
                  : movie?.casts
                      .slice(0, 5)
                      .map((starring) => starring.name)
                      .join(", ")}
              </Text>
              {!showStarring && movie.casts.length > 5 && (
                <Pressable onPress={() => setShowStarring(true)}>
                  <Text style={styles.starring}>See more...</Text>
                </Pressable>
              )}
            </View>
            <Text style={styles.genres}>
              Genres: {movie?.data.genres.map((genre) => genre.name).join(", ")}
            </Text>
            <Pressable onPress={() => Linking.openURL(movie?.data.homepage)}>
              <Text style={styles.official}>Official website</Text>
            </Pressable>
            <Button
              title="Watch now"
              onPress={() => navigate("WatchMovie", movie)}
            />
            <Button
              title="Watch trailer"
              onPress={() => navigate("WatchMovie", movie)}
            />
            <RelatedCategory movies={movie?.similar} navigation={navigation} />
          </ScrollView>
        </Screen>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.black,
    padding: 15
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "500"
  },
  year: {
    color: "#757575",
    marginRight: 5,
    fontSize: 18,
    marginVertical: 10
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginVertical: 10
  },
  age: {
    color: "black",
    fontWeight: "bold"
  },
  overview: {
    fontSize: 15,
    marginVertical: 12
  },
  starringContainer: {
    marginVertical: 10
  },
  starring: {
    fontSize: 14
  },
  genres: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 15,
    marginVertical: 10
  },
  official: {
    fontSize: 14
  }
});
export default MovieDetailScreen;
