import React from "react";
import { Link } from "react-router";
import { FormTypeEntity } from "../../types";
import { PathsData } from "../../constants";
import { getTitleFromType } from "../../helpers";
import "./FormFooterText.css";

type FormFooterTextProps = {
  pathTo: FormTypeEntity;
};

export const FormFooterText: React.FC<FormFooterTextProps> = ({ pathTo }) => {
  const linkText = getTitleFromType(pathTo);
  const text =
    pathTo === "logIn"
      ? "Do you have an account?"
      : "Do you want to create an account?";

  return (
    <p className="form__footer-text">
      {text}
      <Link className="form__footer-link" to={`/${PathsData[pathTo]}`}>
        {linkText}
      </Link>
    </p>
  );
};
