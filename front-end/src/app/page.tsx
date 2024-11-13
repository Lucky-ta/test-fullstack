"use server";

import { api } from "utils";
import { HomePage } from "components";

export default async function Home() {
  const result = await api.get("client");
  const clients = result.data;

  return <HomePage clients={clients} />;
}
