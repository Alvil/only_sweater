import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/Footer.module.scss";
import { FacebookLogo, InstagramLogo } from "components/atoms";
import { capitalize } from "utils/helpers";

export const SubFooterSection: FC = () => {
  const links = ["about", "item", "shop", "info", "press"];

  return (
    <Container className="libre-baskerville">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ paddingBottom: "8rem" }}
      >
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
      </div>
      <Container className="w-75">
        <div className="border-bottom mb-1 pb-4">
          <div className="pb-1">Tel: 0312345678</div>
          <div>Email: onlysweater@jp.com</div>
        </div>
        <div className="text-center m-3" style={{ fontSize: ".85em" }}>
          <span>2022@only sweater</span>
        </div>
      </Container>
    </Container>
  );
};
