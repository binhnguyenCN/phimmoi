// libs
import * as yup from "yup";
import React from "react";
// layouts
import {
  Form,
  FormField,
  ErrorMessage,
  SubmitButton
} from "@/components/Forms";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email !")
    .email()
    .label("Email"),
  password: yup
    .string()
    .required("Please enter your password !")
    .min(4)
    .label("Password")
});

const LoginForm = ({ onSubmit, loginFailed }) => (
  <Form
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => {
      onSubmit(values);
    }}
    validationSchema={schema}
  >
    <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
    <FormField
      autoCapitalize="none"
      autoCorrect={false}
      icon="email"
      keyboardType="email-address"
      placeholder="Email"
      textContentType="emailAddress"
      name="email"
      testID="TestId__email"
    />
    <FormField
      autoCapitalize="none"
      autoCorrect={false}
      icon="lock"
      placeholder="Password"
      secureTextEntry
      textContentType="password"
      name="password"
      testID="TestId__password"
    />
    <SubmitButton title="Login" testID="TestId__submitBtn" />
  </Form>
);

export default LoginForm;
