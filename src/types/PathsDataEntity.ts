type PathsDataTypeEntity = "logIn" | "signUp" | "root";

export type PathsDataEntity = {
  [key in PathsDataTypeEntity]: string;
};
