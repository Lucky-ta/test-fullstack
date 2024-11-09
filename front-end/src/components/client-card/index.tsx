import { Button } from "components";

import * as S from "./styles";

export interface IClientCard {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: {
    id: number;
    color: string;
    text: string;
  };
}

export function ClientCard({ name, email, cpf, phone, status }: IClientCard) {
  return (
    <S.ClientCard>
      <div>
        {name && <span className="name">{name}</span>}
        {email && <span className="email">{email}</span>}
      </div>

      <div>
        {cpf && <span className="cpf">{cpf}</span>}
        {phone && <span className="phone">{phone}</span>}
      </div>

      {status && status.color && status.text && (
        <div className="status">
          <span className="color" style={{ background: status.color }} />
          <span>{status.text}</span>
        </div>
      )}

      <Button type="button" text="Editar" invertColors />
    </S.ClientCard>
  );
}
