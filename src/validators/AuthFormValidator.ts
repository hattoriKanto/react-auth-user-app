import { z, ZodType } from "zod";
import { LogInFormDataEntity, SignUpFormDataEntity } from "../types";

export const LogInFormSchema: ZodType<LogInFormDataEntity> = z.object({
  email: z
    .string()
    .email("Invalid email format. Example: example@test.com")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

export const SignUpFormSchema: ZodType<SignUpFormDataEntity> = z
  .object({
    email: z
      .string()
      .email("Invalid email format. Example: example@test.com")
      .nonempty("Email is required"),
    nickname: z
      .string()
      .min(2, "Nickname must be at least 2 characters")
      .max(32, "Nickname must be no longer than 32 characters")
      .nonempty("Nickname is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
    passwordConfirmation: z.string().nonempty("Confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Passwords do not match",
  });
