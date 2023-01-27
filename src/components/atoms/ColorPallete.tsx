import React, { FC } from "react";

interface Props {
  borderColor: string;
  fill: string;
  className?: string;
}

export const ColorPallete: FC<Props> = ({ borderColor, fill, className }) => {
  const style = {
    width: "14px",
    height: "14px",
    backgroundColor: fill,
    borderRadius: "50%",
    borderColor,
    borderStyle: "solid",
    display: "block",
  };
  return <span style={style} className={className} />;
};
