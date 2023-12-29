import { FC } from "react";
import IconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewbox?: string;
};

export const Icon: FC<IconPropsType> = ({ iconId, height, width, viewbox }) => {
  return (
    <svg
      width={width || "28"}
      height={height || width || "28"}
      viewBox={viewbox || "0 0 28 28"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${IconsSprite}#${iconId}`} />
    </svg>
  );
};
