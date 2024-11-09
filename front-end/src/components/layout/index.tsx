import React, { ReactNode } from "react";

import { Header } from "./header";

import { Icon, Container } from "components";

import * as S from "./styles";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <S.Layout>
      <Header />

      <main>
        <Container>
          <div className="title-box">
            <Icon name="IconUser" />

            <h1>Painel de clientes</h1>
          </div>

          {children}
        </Container>
      </main>
    </S.Layout>
  );
}
