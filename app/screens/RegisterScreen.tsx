// libs
import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
// layouts
import Screen from "@/components/Layout";
import RegisterForm from "@/mains/Forms/RegisterForm";
// others
import { useAuth } from "@/auth/context";

const logo = require("../../assets/logo.png");

type valueFormProps = {
  email: string;
  password: string;
  retypePassword: string;
};

const RegisterScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { storeUser } = useAuth();
  const handleSubmit = (value: valueFormProps) => {
    if (value.email !== "binh@gmail.com") {
      setLoginFailed(true);
      return;
    }
    storeUser({
      name: "Binh Nguyen",
      email: "binh@gmail.com"
    });
  };

  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <RegisterForm loginFailed={loginFailed} onSubmit={handleSubmit} />
    </Screen>
  );
};

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
export default RegisterScreen;
