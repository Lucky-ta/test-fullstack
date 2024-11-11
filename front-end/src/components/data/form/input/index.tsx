import { Field, ErrorMessage } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export function Input({ name, label, placeholder, type }: IInputProps) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name} placeholder={placeholder} type={type} />
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
}
