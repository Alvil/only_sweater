import React, { FC } from "react";
import { Button, Card, Container } from "react-bootstrap";

interface Props {
  href: string;
}
export const ViewMore: FC<Props> = ({ href }) => {
  return <a href={href}>View more→</a>;
};
