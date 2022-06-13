// libs
import React from "react";
import * as yup from "yup";
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
    .label("Password"),
  retypePassword: yup
    .string()
    .required("Please retype your password !")
    .oneOf([yup.ref("password")], "Password does not match !")
    .label("Confirm password")
});

const RegisterForm = ({ loginFailed, onSubmit }) => (
  <Form
    initialValues={{ email: "", password: "", retypePassword: "" }}
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
      underlineColorAndroid="transparent"
    />
    <FormField
      autoCapitalize="none"
      autoCorrect={false}
      icon="lock"
      placeholder="Password"
      secureTextEntry
      keyboardType="default"
      textContentType="password"
      name="password"
      testID="TestId__password"
      underlineColorAndroid="transparent"
    />
    <FormField
      autoCapitalize="none"
      autoCorrect={false}
      icon="lock"
      type="password"
      placeholder="Confirm Password"
      keyboardType="default"
      textContentType="password"
      name="retypePassword"
      testID="TestId__confirmPassword"
      underlineColorAndroid="transparent"
    />
    <SubmitButton title="Register" testID="TestId__submitBtn" />
  </Form>
);
export default RegisterForm;
