import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email().required("Invalid email"),
  password: yup
    .string()
    .min(6)
    .required("Password must be at least 6 characters"),
});

export const signinSchema = yup.object().shape({
  email: yup.string().email().required("Invalid email"),
  password: yup.string().required("Invalid password"),
});
