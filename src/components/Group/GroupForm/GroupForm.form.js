import * as Yup from "yup";

export function initialValues() {
  return {
    message: "",
  };
}

export function validationSchema() {
  return Yup.object({
    message: Yup.string().required(true),
  });
}
