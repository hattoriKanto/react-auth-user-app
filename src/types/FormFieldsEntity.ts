import { FormTypeEntity } from ".";

export type FormFieldPropsEntity = {
  type: string;
  placeholder: string;
};

type LogInFormFieldEntity = "email" | "password";

type SignUpFormFieldEntity =
  | "nickname"
  | "email"
  | "password"
  | "passwordConfirmation";

export type AuthFormFieldsEntity = LogInFormFieldEntity | SignUpFormFieldEntity;

export type AuthFormFieldsValuesEntity = {
  [key in AuthFormFieldsEntity]: string;
};

export type SignUpFormFieldsEntity = {
  [key in SignUpFormFieldEntity]: FormFieldPropsEntity;
};

export type LogInFormFieldsEntity = {
  [key in LogInFormFieldEntity]: FormFieldPropsEntity;
};

export type FormFieldsDataEntity = {
  [key in FormTypeEntity]: SignUpFormFieldsEntity | LogInFormFieldsEntity;
};
