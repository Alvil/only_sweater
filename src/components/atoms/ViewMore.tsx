import React, { FC } from "react";

interface Props {
  href: string;
}

export const ViewMore: FC<Props> = ({ href }) => {
  return (
    <a
      href={href}
      className="text-decoration-none border-bottom p-3 border-dark text-dark libre-baskerville"
    >
      View more →
    </a>
  );
};
