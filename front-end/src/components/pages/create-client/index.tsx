import { Form, Formik } from "formik";

import { Button, Input, InputMaskField, Layout, Select } from "components";

import { IUser } from "interfaces";

import * as S from "./styles";

export function CreateClientPage() {
  async function handleSubmit(payload: IUser) {
    console.log(payload);
  }

  const initialValues: IUser = {
    id: 0,
    name: "",
    email: "",
    cpf: "",
    phone: "",
    status: {
      id: 0,
      color: "",
      text: "",
    },
  };

  return (
    <Layout>
      <S.HomePage>
        <div className="description">
          <h2>Novo usuário</h2>

          <span>Informe os campos a seguir para criar um novo usuário</span>
        </div>

        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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

            <Select
              name="status"
              placeholder="Status"
              options={[
                {
                  label: "teste",
                  value: "teste",
                },
              ]}
            />

            <Button text="Criar" type="submit" />
            <Button text="Voltar" type="button" invertColors />
          </Form>
        </Formik>
      </S.HomePage>
    </Layout>
  );
}
