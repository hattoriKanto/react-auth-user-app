import React from "react";
import "./ErrorMessage.css";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <span className="error">{message}</span>;
};
