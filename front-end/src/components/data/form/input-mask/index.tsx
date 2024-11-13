"use client";

import { Field, FieldProps, ErrorMessage } from "formik";
import { InputMask } from "@react-input/mask";
import { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  mask: string;
}

export function InputMaskField({ mask, label, ...props }: IInputProps) {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => (
        <div>
          {label && <label htmlFor={props.name}>{label}</label>}
          <InputMask
            {...field}
            mask={mask}
            id={props.name}
            showMask
            replacement="_"
            type={props.type || "text"}
            placeholder={props.placeholder}
            value={field.value || ""}
            onChange={(e) => {
              form.setFieldValue(props.name, e.target.value);
            }}
            onBlur={() => form.setFieldTouched(props.name, true)}
          />
          <ErrorMessage name={props.name} component="div" className="error" />
        </div>
      )}
    </Field>
  );
}
