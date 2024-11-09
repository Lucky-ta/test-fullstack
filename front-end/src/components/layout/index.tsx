import React, { ReactNode } from "react";

import { Header } from "./header";

import * as S from "./styles";
import { Container } from "components/data";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <S.Layout>
      <Header />

      <main>
        <Container>{children}</Container>
      </main>
    </S.Layout>
  );
}
