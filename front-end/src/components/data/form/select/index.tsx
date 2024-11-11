import { Field, ErrorMessage } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  options: {
    label: string;
    value: string | number;
  }[];
}

export function Select(props: IInputProps) {
  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <Field {...props} component="select" id={props.name}>
        {props?.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={props.name} component="div" className="error" />
    </>
  );
}
