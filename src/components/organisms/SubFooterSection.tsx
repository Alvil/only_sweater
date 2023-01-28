import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/SubFooter.module.scss";
import { FacebookLogo, InstagramLogo } from "components/atoms";
import { capitalize } from "utils/helpers";

export const SubFooterSection: FC = () => {
  const links = ["about", "item", "shop", "info", "press"];

  return (
    <Container fluid className="libre-baskerville">
      {/* screen width >=1400 */}
      <div className={styles.wide_screen_wrapper}>
        <div
          className="d-flex justify-content-between align-items-center px-5"
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
        <div className="border-bottom mb-1 pb-4">
          <div className="pb-1">Tel: 0312345678</div>
          <div>Email: onlysweater@jp.com</div>
        </div>
        <div className="text-center m-3" style={{ fontSize: ".85em" }}>
          <span>2022@only sweater</span>
        </div>
      </div>
      {/* screen width <1400 */}
      <div className={styles.narrow_screen_wrapper}>
        <div className="text-center py-5">
          <img
            src="only_sweater_slogan.png"
            alt="sweater_slogan"
            style={{ width: "200px" }}
          />
          <div className={styles.slogan_text}>We sell only sweaters</div>
          <div className={styles.links_wrapper}>
            {links.map((link) => (
              <div className="col-4">
                <a href={`/${link}`} className={styles.text_link}>
                  {capitalize(link)}
                </a>
              </div>
            ))}
            <div className="col-4">
              <a href="#instagram" className="me-2">
                <InstagramLogo />
              </a>
              <a href="#facebook">
                <FacebookLogo />
              </a>
            </div>
          </div>
        </div>
        <div className=" mb-1 text-center">
          <div className="pb-3">Tel: 0312345678</div>
          <div className="pb-5">Email: onlysweater@jp.com</div>
        </div>
        <div
          className="text-center m-3 pt-3 border-top w-100"
          style={{ fontSize: ".85em" }}
        >
          <span>2022@only sweater</span>
        </div>
      </div>
    </Container>
  );
};
