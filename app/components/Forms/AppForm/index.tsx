// libs
import { Formik } from "formik";
import React from "react";
import { View } from "react-native";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {() => <View>{children}</View>}
  </Formik>
);
export default AppForm;
