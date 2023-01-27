import React, { FC } from "react";

interface Props {
  href: string;
}
export const ViewMore: FC<Props> = ({ href }) => {
  return <a href={href}>View more→</a>;
};
