// libs
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
// layouts
import Screen from "@/components/Layout";
import LoginForm from "@/mains/Forms/LoginForm";
// others
import { useAuth } from "@/auth/context";
import defaultAccount from "@/constants/auth";

const logo = require("../../assets/logo.png");

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { storeUser } = useAuth();
  const handleSubmit = ({ email }) => {
    if (email !== defaultAccount.email) {
      setLoginFailed(true);
      return;
    }
    storeUser(defaultAccount);
  };

  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <LoginForm onSubmit={handleSubmit} loginFailed={loginFailed} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: "100%",
    height: "20%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain"
  }
});
