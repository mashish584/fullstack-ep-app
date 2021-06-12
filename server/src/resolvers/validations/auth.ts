import * as yup from "yup";

export const createUserValidation = yup.object().shape({
  username: yup.string().trim().required("Please enter username."),
  email: yup.string().trim().email().required("Please enter valid email address."),
  password: yup.string().trim().required("Please enter password."),
});
