import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    image: "",
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required(true),
    image: Yup.object().required(true),
  });
}
