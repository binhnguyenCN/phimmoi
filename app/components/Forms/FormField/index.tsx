// libs
import { useFormikContext } from "formik";
import React from "react";
// layouts
import ErrorMessage from "@/components/Forms/ErrorMessage";
import TextInput from "@/components/Forms/TextInput";

const FormField = ({ name, width = "100%", testID, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <TextInput
        width={width}
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        testID={testID}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
export default FormField;
