"use client";

import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Form, Formik } from "formik";

import { api } from "utils";
import { schema } from "./schema";
import { SelectStatus } from "./select-status";
import { Button, Input, InputMaskField } from "components";

import { IUser } from "interfaces";

import * as S from "./styles";

export interface IPayload extends Omit<IUser, "status"> {
  statusId: string | number;
}

export function UserForm({ initialData }: { initialData?: IUser }) {
  const router = useRouter();

  async function handleSubmit(payload: IPayload) {
    const method = initialData ? "put" : "post";

    try {
      const result = await api[method](
        `client/${initialData?.id ?? ""}`,
        payload
      );
      toast.success(result?.data?.message);
      router.push("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        toast.error(e?.response?.data?.message);
        return;
      }
      toast.error("Erro ao criar usuário.");
    }
  }

  const initialValues: IPayload = {
    ...initialData,
    statusId: initialData?.status?.id || 0,
  };

  return (
    <S.ClientPage>
      <div className="description">
        <h2>{initialData ? "Editar" : "Novo"} usuário</h2>

        <span>
          Informe os campos a seguir para {initialData ? "editar" : "criar um"}{" "}
          novo usuário
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

          <InputMaskField name="cpf" placeholder="CPF" mask="___.___.___-__" />

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
  );
}
