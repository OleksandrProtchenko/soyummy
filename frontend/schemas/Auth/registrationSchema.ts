import { string, date, object, InferType } from "yup";

export const registrationSchema = object({
  name: string()
    .min(2, "Too short")
    .max(30, "Too long")
    .required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  createdAt: date().default(() => new Date()),
});

export type RegistrationFormData = InferType<typeof registrationSchema>;
