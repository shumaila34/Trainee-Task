import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "Must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters"),
});
