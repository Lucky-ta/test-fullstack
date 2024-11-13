"use server";

import { Layout, UserForm } from "components";

import { api } from "utils";

export default async function EditClient({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = params;

  const result = await api.get(`client/${(await id).id}`);
  const client = result.data;

  return (
    <Layout>
      <UserForm initialData={client} />
    </Layout>
  );
}
