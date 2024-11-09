import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  invertColors?: boolean;
}

export function Button({ text, invertColors, ...rest }: IButtonProps) {
  return (
    <S.Button {...rest} className={invertColors ? "invertColors" : ""}>
      {text}
    </S.Button>
  );
}
