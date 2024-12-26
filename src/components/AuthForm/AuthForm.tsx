import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthFormFieldsValuesEntity,
  FieldProps,
  FormTypeEntity,
} from "../../types";
import { FormFieldsData } from "../../constants";
import { LogInFormSchema, SignUpFormSchema } from "../../validators";
import { getTitleFromType } from "../../helpers";
import { Button, Divider, Field, FormFooterText, Title } from "../../ui";
import "./AuthForm.css";

type AuthFormProps = {
  type: FormTypeEntity;
};

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const fields = FormFieldsData[type];
  const validationSchema =
    type === "logIn" ? LogInFormSchema : SignUpFormSchema;
  const text = getTitleFromType(type);
  const pathTo: FormTypeEntity = type === "logIn" ? "signUp" : "logIn";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormFieldsValuesEntity>({
    mode: "all",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: AuthFormFieldsValuesEntity) => {
    try {
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error", error.message);
      }
    }
  };

  return (
    <section className="auth-form">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__background" />
        <div className="form__wrapper">
          <div className="form__header">
            <Title type="h2">{text}</Title>
            <div className="form__fields-wrapper">
              {Object.entries(fields).map(([fieldName, properties]) => {
                const currentFieldName =
                  fieldName as keyof AuthFormFieldsValuesEntity;
                const errorMessage =
                  typeof errors[currentFieldName]?.message === "string"
                    ? errors[currentFieldName].message
                    : "";
                const fieldProps: FieldProps = {
                  register,
                  errorMessage,
                  properties,
                  fieldName: currentFieldName,
                };

                return <Field key={fieldName} {...fieldProps} />;
              })}
            </div>
            <Button>{text}</Button>
          </div>
          <Divider />
          <div className="form__footer">
            <FormFooterText pathTo={pathTo} />
          </div>
        </div>
      </form>
    </section>
  );
};
