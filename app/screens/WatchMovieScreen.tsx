// libs
import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
// layouts
import Screen from "@/components/Layout";
import Text from "@/components/Text";
import colors from "@/constants/colors";

const WatchMovieScreen = () => {
  const currentVideo = "https://www.2embed.ru/embed/tmdb/movie?id=675353";

  return (
    <Screen>
      <Text style={styles.title}>Watch Movie Screen</Text>
      <WebView
        // style={styles.video}
        scalesPageToFit
        bounces={false}
        javaScriptEnabled
        originWhitelist={["*"]}
        allowsFullscreenVideo
        source={{
          html: `
          <!DOCTYPE html>
          <html>
            <body>
              <div id="baseDiv">
                <iframe
                src="https://www.2embed.ru/embed/tmdb/movie?id=675353"
                frameborder="0"
                width="100%" height="500"
                scrolling="no"
                allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true"
                ></iframe>
              </div>
            </body>
          </html>`
        }}
        automaticallyAdjustContentInsets={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9
  }
});
export default WatchMovieScreen;
