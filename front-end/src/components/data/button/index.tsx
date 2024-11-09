import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import * as S from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  invertColors?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export function Button({
  text,
  invertColors = false,
  href,
  target,
  ...rest
}: IButtonProps) {
  const className = invertColors ? "invertColors" : "";

  return href ? (
    <S.Button>
      <Link href={href} target={target} className={className}>
        {text}
      </Link>
    </S.Button>
  ) : (
    <S.Button>
      <button {...rest} className={className}>
        {text}
      </button>
    </S.Button>
  );
}
