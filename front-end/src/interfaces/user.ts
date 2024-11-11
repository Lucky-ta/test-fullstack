export interface IUser {
  id?: number;
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  status?: {
    id: number;
    color: string;
    text: string;
  };
}
