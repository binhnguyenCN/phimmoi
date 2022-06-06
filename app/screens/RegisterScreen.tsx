// libs
import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as yup from "yup";
// layouts
import Screen from "@/components/Layout";
import {
  Form,
  FormField,
  ErrorMessage,
  SubmitButton
} from "@/components/Forms";
// others
const logo = require("../../assets/logo.png");

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password")
});

const RegisterScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = ({ email }) => {
    if (email !== "binh@gmail.com") {
      setLoginFailed(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={schema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />
        <SubmitButton title="Login" />
      </Form>
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
