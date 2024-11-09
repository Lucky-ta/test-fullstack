import { Field } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  options: {
    label: string;
    value: string;
  }[];
}

export function Select(props: IInputProps) {
  return (
    <Field {...props} component="select">
      {props?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
  );
}
