import { FormFieldsDataEntity } from "../types";

export const FormFieldsData: FormFieldsDataEntity = {
  signUp: {
    email: {
      placeholder: "Please enter your email",
      type: "email",
    },
    nickname: {
      placeholder: "Please enter your nickname",
      type: "text",
    },
    password: {
      placeholder: "Please enter your password",
      type: "password",
    },
    passwordConfirmation: {
      placeholder: "Please confirm your password",
      type: "password",
    },
  },
  logIn: {
    email: { placeholder: "Please enter your email", type: "email" },
    password: {
      placeholder: "Please enter your password",
      type: "password",
    },
  },
};
