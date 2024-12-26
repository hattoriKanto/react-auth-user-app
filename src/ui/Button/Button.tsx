import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="button">{children}</button>;
};
