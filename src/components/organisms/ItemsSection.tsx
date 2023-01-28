import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { ItemsSectionCarousel } from "components/molecules";
import { ViewMore } from "components/atoms";

const sweaters = [
  {
    id: 1,
    src: "sweater_5.png",
    price: 10000,
    description: "ゆったりしたセーター",
    variants: ["#FFFFFF", "#D9D9D9", "#B8B8B8", "#F5B05F", "#B5D3F7"],
  },
  {
    id: 2,
    src: "sweater_5.png",
    price: 10000,
    description: "ゆったりしたセーター",
    variants: ["#FFFFFF", "#D9D9D9", "#B8B8B8", "#F5B05F", "#B5D3F7"],
  },
  {
    id: 3,
    src: "sweater_5.png",
    price: 10000,
    description: "ゆったりしたセーター",
    variants: ["#FFFFFF", "#D9D9D9", "#B8B8B8", "#F5B05F", "#B5D3F7"],
  },
  {
    id: 4,
    src: "sweater_5.png",
    price: 10000,
    description: "ゆったりしたセーター",
    variants: ["#FFFFFF", "#D9D9D9", "#B8B8B8", "#F5B05F", "#B5D3F7"],
  },
];

export const ItemsSection: FC = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h3 className="text-dark libre-baskerville">Items</h3>
      <ItemsSectionCarousel sweaters={sweaters} />
      <ViewMore href="/item" />
    </Container>
  );
};
