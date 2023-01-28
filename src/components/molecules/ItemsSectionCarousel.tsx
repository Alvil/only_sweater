import React, { FC } from "react";
import { Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1250, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
  },
};

export const ItemsSectionCarousel: FC<Props> = ({ sweaters }) => {
  return (
    <Container className="w-75">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="sweater-carousel"
      >
        {sweaters.map((sweater) => (
          <Card
            key={sweater.id}
            style={{ width: "18rem" }}
            className="border-0 mx-auto"
          >
            <Card.Img variant="top" src={sweater.src} />
            <Card.Body>
              <Card.Text className="d-flex">
                {sweater.variants.map((variant) => (
                  <span className="pe-1" key={variant}>
                    <ColorVariant fill={variant} borderColor="#D9D9D9" />
                  </span>
                ))}
              </Card.Text>
              <Card.Text>
                {sweater.description}
                {sweater.id}
              </Card.Text>
              <Card.Text className="text-end pe-2">
                ¥ {sweater.price.toLocaleString()}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};
