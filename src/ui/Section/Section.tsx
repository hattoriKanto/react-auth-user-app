import React from "react";
import "./Section.css";

type SectionProps = {
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="section">{children}</section>;
};
