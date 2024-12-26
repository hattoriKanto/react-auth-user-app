import React from "react";
import { TitleTypeEntity } from "../../types";
import "./Title.css";

type TitleProps = {
  type: TitleTypeEntity;
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ type, children }) => {
  const Tag = type as JSX.ElementType;

  return <Tag className={`title title__${type}`}>{children}</Tag>;
};
