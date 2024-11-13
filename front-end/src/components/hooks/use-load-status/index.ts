import { useQuery } from "@tanstack/react-query";

import { api } from "utils";

import { IStatus } from "interfaces";

export function useLoadStatus() {
  async function fetcher() {
    const response = await api.get<IStatus[]>("status");
    return response.data;
  }

  return useQuery({
    queryKey: ["status"],
    queryFn: fetcher,
  });
}
