import * as yup from "yup";

export const TODO_SCHEMA = yup.object({
  taskText: yup
    .string("incorrect text input")
    .matches(/^.{3,}$/, "incorrect text input")
    .required("enter data"),
});
