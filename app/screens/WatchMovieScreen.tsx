// libs
import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
// layouts
import Screen from "@/components/Layout";
import Text from "@/components/Text";
// others
import colors from "@/constants/colors";
import embedMovie from "@/utils/movies";

const WatchMovieScreen = ({ route }) => {
  const movieId: number = route.params.id;
  const movieTitle: string = route.params.title;

  return (
    <Screen>
      <Text style={styles.title}>{movieTitle}</Text>
      <WebView
        scalesPageToFit
        bounces={false}
        javaScriptEnabled
        originWhitelist={["*"]}
        allowsFullscreenVideo
        testID="TestId__movie"
        source={{
          html: `
            <iframe
            src=${embedMovie(movieId)}
            frameborder="0"
            width="100%" height="500"
            scrolling="no"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            ></iframe>`
        }}
        automaticallyAdjustContentInsets={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 50
  }
});
export default WatchMovieScreen;
