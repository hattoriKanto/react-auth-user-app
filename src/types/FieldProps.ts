import { UseFormRegister } from "react-hook-form";
import {
  AuthFormFieldsEntity,
  AuthFormFieldsValuesEntity,
  FormFieldPropsEntity,
} from ".";

export type FieldProps = {
  register: UseFormRegister<AuthFormFieldsValuesEntity>;
  errorMessage: string;
  properties: FormFieldPropsEntity;
  fieldName: AuthFormFieldsEntity;
};
