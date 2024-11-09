import * as Icons from "..";

export interface IRenderIconProps {
  color: string;
  nameIcon: keyof typeof Icons;
}

export function RenderIcon({ nameIcon, color }: IRenderIconProps) {
  const IconComponent = Icons[nameIcon] as React.ComponentType<{
    color: string;
  }>;

  return <>{IconComponent ? <IconComponent color={color} /> : null}</>;
}
