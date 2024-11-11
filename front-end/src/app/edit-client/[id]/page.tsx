"use client";

import { Layout, useUserForm } from "components";

import { IUser } from "interfaces";

export default function EditClient() {
  const initialData: IUser = {
    cpf: "859.582.550-53",
    email: "asfa@gmail.com",
    id: 1,
    name: "Lucas Maieski",
    phone: "(51)995779312",
    status: {
      color: "red",
      id: 1,
      text: "Inativo",
    },
  };
  const { UserForm } = useUserForm({ initialData });

  return <Layout>{UserForm}</Layout>;
}
