import * as Yup from "yup";

export function initialValues() {
  return {
    lastname: "",
  };
}

export function validationSchema() {
  return Yup.object({
    lastname: Yup.string().required(true),
  });
}
