"use client";

import { Layout, useUserForm } from "components";

export default function CreateClient() {
  const { UserForm } = useUserForm({});

  return <Layout>{UserForm}</Layout>;
}
