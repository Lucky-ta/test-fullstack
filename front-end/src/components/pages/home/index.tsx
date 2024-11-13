"use client";

import { ROUTES } from "settings";
import { Button, ClientCard, Layout } from "components";

import { IUser } from "interfaces";

import * as S from "./styles";

export function HomePage({ clients }: { clients: IUser[] }) {
  return (
    <Layout>
      <S.HomePage>
        <div className="description">
          <div>
            <h2>Listagem de usuários</h2>

            <span>Escolha um cliente para visualizar os detalhes</span>
          </div>

          <Button
            type="button"
            text="Novo cliente"
            href={ROUTES.createClient}
          />
        </div>

        <div className="list">
          {clients.map((card) => (
            <ClientCard key={card.id} {...card} />
          ))}
        </div>

        <p>
          Exibindo <strong>{clients.length}</strong> clientes
        </p>
      </S.HomePage>
    </Layout>
  );
}
