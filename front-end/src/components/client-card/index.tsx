"use client";

import { Button } from "components";

import { ROUTES } from "settings";
import { IUser } from "interfaces";

import * as S from "./styles";

export function ClientCard({ id, name, email, cpf, phone, status }: IUser) {
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

      {id && (
        <Button
          type="button"
          text="Editar"
          invertColors
          href={ROUTES.eitClient + `/${id}`}
        />
      )}
    </S.ClientCard>
  );
}
