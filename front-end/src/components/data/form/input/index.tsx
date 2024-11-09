import { Field } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export function Input(props: IInputProps) {
  return <Field {...props} />;
}
