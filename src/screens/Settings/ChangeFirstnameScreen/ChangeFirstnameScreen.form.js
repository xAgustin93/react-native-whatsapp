import * as Yup from "yup";

export function initialValues() {
  return {
    firstname: "",
  };
}

export function validationSchema() {
  return Yup.object({
    firstname: Yup.string().required(true),
  });
}
