import React from "react";
import { FieldProps } from "../../types";
import { ErrorMessage } from "..";
import { getTitleFromType } from "../../helpers";
import "./Field.css";

export const Field: React.FC<FieldProps> = ({
  register,
  errorMessage,
  fieldName,
  properties,
}) => {
  const title = getTitleFromType(fieldName);

  return (
    <label className="field">
      <span className="field__title">{title}</span>
      <input
        {...register(fieldName)}
        className={!errorMessage ? "field__input" : "field__input field__error"}
        {...properties}
      />
      <ErrorMessage message={errorMessage} />
    </label>
  );
};
