import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/About.module.scss";
import { ViewMore } from "components/atoms";

export const AboutSection: FC = () => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <img
        src="sweater_4.png"
        alt="sweater_image_5"
        height={455}
        className="me-3"
      />
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <p className="fs-2 libre-baskerville text-dark pb-2 text-center">
            About
          </p>
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

          <ViewMore href="/about" />
        </div>
      </div>
    </Container>
  );
};
