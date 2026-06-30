import { object, string, InferType } from "yup";

export const signInSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

export type SignInFormData = InferType<typeof signInSchema>;
