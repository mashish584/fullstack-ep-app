import * as yup from "yup";
import { IsJsonString } from "../../utils";

export const createEventValidation = yup.object().shape({
  title: yup.string().trim().required("Please provide title for event."),
  descrption: yup.string().trim().required("Please provide description for event."),
  category: yup.array().of(yup.string()).min(1, "Please add atleast one category for an event."),
  location: yup
    .string()
    .trim()
    .test("valid-location", "Provided location data is not valid.", (value) => IsJsonString(value)),
  eventTimestamp: yup
    .string()
    .required("Please provide event time.")
    .test("validate-time", "Event timestamp is not valid.", (value) => new Date(value).getTime() > 0),
  price: yup.number().test("is-decimal", "invalid decimal", (value) => {
    const regex = /^\d*\.{1}\d*$/;
    return regex.test(value.toString());
  }),
});
