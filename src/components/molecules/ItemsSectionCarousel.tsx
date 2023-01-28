import React, { FC } from "react";
import { Card, Carousel } from "react-bootstrap";
import { ColorVariant } from "components/atoms";

interface Props {
  sweaters: {
    id: number;
    src: string;
    price: number;
    description: string;
    variants: string[];
  }[];
}

export const ItemsSectionCarousel: FC<Props> = ({ sweaters }) => {
  return (
    <>
      <Carousel>
        {sweaters.map((sweater) => (
          <Carousel.Item key={sweater.id}>
            <Card style={{ width: "18rem" }} className="border-0">
              <Card.Img variant="top" src={sweater.src} />
              <Card.Body>
                <Card.Text className="d-flex">
                  {sweater.variants.map((variant) => (
                    <span className="pe-1" key={variant}>
                      <ColorVariant fill={variant} borderColor="#D9D9D9" />
                    </span>
                  ))}
                </Card.Text>
                <Card.Text>{sweater.description}</Card.Text>
                <Card.Text className="text-end pe-2">
                  ¥ {sweater.price?.toLocaleString() || 0}
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
