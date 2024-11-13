"use server";

import { Layout, UserForm } from "components";
import { GetServerSidePropsContext } from "next";

import { api } from "utils";

export default async function EditClient(ctx: GetServerSidePropsContext) {
  const id = ctx?.params?.id;

  const result = await api.get(`client/${id}`);
  const client = result.data;

  return (
    <Layout>
      <UserForm initialData={client} />
    </Layout>
  );
}
