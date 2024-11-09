import { RenderIcon } from "../render-icon";

import * as icons from "..";
import { IIcon } from "../interfaces";

export type IconsNames = keyof typeof icons;

interface IIconComponent extends IIcon {
  name: IconsNames;
}

export function Icon({ name, color }: IIconComponent) {
  return RenderIcon({ nameIcon: name, color: color ?? "#000" });
}
