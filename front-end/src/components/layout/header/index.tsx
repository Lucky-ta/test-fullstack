import Link from "next/link";

import { Icon } from "components";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <Link href="/">
        <Icon name="IconLogo" />
      </Link>
    </S.Header>
  );
}
