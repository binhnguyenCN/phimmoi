// libs
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
// layouts
import Text from "@/components/Text";
import Button from "@/components/Button";
// others
import { navigate } from "@/navigation/rootNavigation";
import colors from "@/constants/colors";

const background = require("../../assets/background.png");
const logo = require("../../assets/logo.png");

const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={background}
      style={styles.backgroundImage}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tagline}>
          Unlimited movies, TV shows, and more.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="register"
          onPress={() => navigate("Register")}
          testID="TestId__registerBtn"
        />
        <Button
          color="#fff"
          title="login"
          onPress={() => navigate("Login")}
          testID="TestId__loginBtn"
        />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70
  },
  logo: {
    marginVertical: 10,
    width: "100%",
    height: "40%",
    resizeMode: "contain"
  },
  tagline: {
    width: "70%",
    fontSize: 25,
    color: colors.white,
    textAlign: "center",
    fontWeight: "500",
    paddingVertical: 20
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 100
  }
});

export default WelcomeScreen;
