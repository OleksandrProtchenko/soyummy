"use client";

import css from "./RegistrationForm.module.css";
import { useAuthStore } from "@/store/user";
import {
  RegistrationFormData,
  registrationSchema,
} from "@/schemas/Auth/registrationSchema";
import { useFormik } from "formik";
import { RegisterResponse } from "@/types/auth/user";

export default function RegistrationForm() {
  const userStore = useAuthStore((state) => state.setUser);

  const initialValues: RegistrationFormData = {
    name: "",
    email: "",
    password: "",
    createdAt: new Date(),
  };

  const formik = useFormik<RegistrationFormData>({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values: RegisterResponse) => {
      userStore({
        name: values.name ?? "",
        email: values.email,
        createdAt: new Date(),
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <input
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={css.input}
      />
      {formik.touched.name && formik.errors.name && (
        <div className={css.error}>{formik.errors.name}</div>
      )}

      <input
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={css.input}
      />
      {formik.touched.email && formik.errors.email && (
        <div className={css.error}>{formik.errors.email}</div>
      )}

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={css.input}
      />
      {formik.touched.password && formik.errors.password && (
        <div className={css.error}>{formik.errors.password}</div>
      )}
      <button type="submit" className={css.button}>
        {formik.isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
