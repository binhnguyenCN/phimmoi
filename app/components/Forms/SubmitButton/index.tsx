// libs
import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
// layouts
import Button from "@/components/Button";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
