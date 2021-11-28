import * as yup from "yup";

export const createUserValidation = yup.object().shape({
  username: yup.string().trim().required("Please enter username."),
  email: yup.string().trim().email().required("Please enter valid email address."),
  password: yup.string().trim().required("Please enter password."),
});

export const updateProfileValidation = yup.object().shape({
  username: yup
    .string()
    .trim()
    .test("username", "Please enter username.", (val) => (typeof val === "string" ? val.length > 0 : true)),
  email: yup.string().trim().email(),
  fullname: yup
    .string()
    .trim()
    .test("fullname", "Fullname should be less than 100 chars", (val) => (val ? val?.length < 100 : true)),
  bio: yup
    .string()
    .trim()
    .test("bio", "Bio should be less than 300 chars", (val) => (val ? val?.length < 300 : true)),
});
