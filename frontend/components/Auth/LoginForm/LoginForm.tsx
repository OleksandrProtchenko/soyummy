"use client";

import css from "./LoginForm.module.css";
import { useAuthStore } from "@/store/user";
import { useFormik } from "formik";
import { SignInResponse } from "@/types/auth/user";
import { SignInFormData, signInSchema } from "@/schemas/Auth/signInSchema";

export default function LoginForm() {
  const userStore = useAuthStore((state) => state.setUser);

  const initialValues: SignInFormData = {
    email: "",
    password: "",
  };

  const formik = useFormik<SignInFormData>({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: (values: SignInResponse) => {
      userStore({
        name: values.name ? values.name : values.email.split("@")[0],
        email: values.email,
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
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
