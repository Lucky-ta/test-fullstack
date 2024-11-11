import { useRouter } from "next/navigation";

import { Form, Formik } from "formik";

import { schema } from "./schema";
import { Button, Input, InputMaskField, Layout, Select } from "components";

import * as S from "./styles";

interface IPayload {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string | number;
}

export function CreateClientPage() {
  const router = useRouter();

  async function handleSubmit(payload: IPayload) {
    console.log(payload);
  }

  const initialValues: IPayload = {
    id: 0,
    name: "",
    email: "",
    cpf: "",
    phone: "",
    status: 1,
  };

  return (
    <Layout>
      <S.HomePage>
        <div className="description">
          <h2>Novo usuário</h2>

          <span>Informe os campos a seguir para criar um novo usuário</span>
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

            <Select
              name="status"
              placeholder="Status"
              options={[
                {
                  label: "teste",
                  value: 1,
                },
                {
                  label: "teste2",
                  value: 2,
                },
              ]}
            />

            <div className="actions">
              <Button text="Criar" type="submit" />
              <Button
                text="Voltar"
                type="button"
                invertColors
                onClick={() => router.back()}
              />
            </div>
          </Form>
        </Formik>
      </S.HomePage>
    </Layout>
  );
}
