import * as yup from "yup";

import { validateCPF, validatePhone } from "utils";

export const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .test("is-valid-cpf", "CPF inválido", (value) => validateCPF(value)),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .test("is-valid-phone", "Telefone inválido", (value) =>
      validatePhone(value)
    ),
  //   status: yup
  //     .string()
  //     .required("Este campo é obrigatório")
  //     .oneOf(["option1", "option2", "option3"], "Selecione uma opção válida"),
});
