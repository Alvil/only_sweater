import { FacebookLogo, InstagramLogo } from "components/atoms";
import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/Footer.module.scss";
import { capitalize } from "utils/helpers";

export const FooterSection: FC = () => {
  const links = ["about", "item", "shop", "info", "press"];

  return (
    <Container className="d-flex justify-content-between align-items-center libre-baskerville">
      <div>
        <img
          src="only_sweater_slogan.png"
          alt="sweater_slogan"
          style={{ width: "200px" }}
        />
        We sell only sweaters
      </div>
      <div>
        {links.map((link) => (
          <a href={`/${link}`} className={styles.text_link}>
            {capitalize(link)}
          </a>
        ))}
        <a href="#instagram" className="ms-5">
          <InstagramLogo />
        </a>
        <a href="#facebook" className="m-3">
          <FacebookLogo />
        </a>
      </div>
    </Container>
  );
};
