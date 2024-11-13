import { Select } from "components/data";
import { useLoadStatus } from "components/hooks";

export function SelectStatus() {
  const { data, isFetching, error } = useLoadStatus();

  if (isFetching) {
    return "Carregando...";
  }

  if (error) {
    return <></>;
  }

  return (
    <Select
      name="statusId"
      placeholder="Status"
      options={
        data?.map((status) => ({
          value: status.id,
          label: status.text,
        })) || []
      }
    />
  );
}
