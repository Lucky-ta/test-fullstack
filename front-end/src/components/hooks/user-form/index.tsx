import { useRouter } from "next/navigation";

import { Form, Formik } from "formik";

import { schema } from "./schema";
import { SelectStatus } from "./select-status";
import { Button, Input, InputMaskField } from "components";

import { IUser } from "interfaces";

import * as S from "./styles";

interface IPayload extends Omit<IUser, "status"> {
  status: string | number;
}

const initialValue: IUser = {
  cpf: "",
  email: "",
  id: 0,
  name: "",
  phone: "",
  status: {
    color: "",
    id: 1,
    text: "",
  },
};

export function useUserForm({
  initialData = initialValue,
}: {
  initialData?: IUser;
}) {
  const router = useRouter();

  async function handleSubmit(payload: IPayload) {
    console.log(initialData ? "Editar" : "Criar", payload);
  }

  const initialValues: IPayload = {
    ...initialData,
    status: initialData?.status?.id || 0,
  };

  return {
    UserForm: (
      <S.ClientPage>
        <div className="description">
          <h2>{initialData ? "Editar" : "Novo"} usuário</h2>

          <span>
            Informe os campos a seguir para{" "}
            {initialData ? "editar" : "criar um"} novo usuário
          </span>
        </div>

        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          initialValues={initialValues}
        >
          <Form>
            <Input name="name" placeholder="Nome" />

            <Input name="email" placeholder="E-mail" type="email" />

            <InputMaskField
              name="cpf"
              placeholder="CPF"
              mask="___.___.___-__"
            />

            <InputMaskField
              name="phone"
              placeholder="Telefone"
              mask="(__)_________"
            />

            <SelectStatus />

            <div className="actions">
              <Button text={initialData ? "Editar" : "Criar"} type="submit" />
              <Button
                text="Voltar"
                type="button"
                invertColors
                onClick={() => router.back()}
              />
            </div>
          </Form>
        </Formik>
      </S.ClientPage>
    ),
  };
}
