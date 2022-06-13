// libs
import { useFormikContext } from "formik";
import React from "react";
// layouts
import Button from "@/components/Button";

type SubmitBtnProps = {
  title: string;
  testID?: string;
};

const SubmitButton: React.FC<SubmitBtnProps> = ({ title, testID }) => {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} testID={testID} />;
};

export default SubmitButton;
