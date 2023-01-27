import React, { FC } from "react";
import { Card, Container } from "react-bootstrap";
import styles from "styles/components/Slogan.module.scss";

export const About: FC = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ paddingTop: "15rem", paddingBottom: "15rem" }}
    >
      <img src="sweater_4.png" alt="sweater_image_5" height={455} />
      <div style={{ maxWidth: "300px" }}>
        <Card className="border-0">
          <Card.Title className="text-center">About</Card.Title>
          <Card.Text>
            <p>
              着るだけで心が満たされていくそんなセーターを作るために
              セーターだけを販売するOnly Sweaterを立ち上げました。
            </p>
            <p>
              冬の季節にしか着ないセーターだけれど、
              少しこだわるだけで今年の冬を特別なものにしてもらえるように
              細部までこだわって作りました。
            </p>
            <p>あなたの冬が特別なものになりますように...</p>
          </Card.Text>
          <Card.Link href="/about" className="">
            View more→
          </Card.Link>
        </Card>
      </div>
    </Container>
  );
};
