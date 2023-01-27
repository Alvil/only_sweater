import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/Slogan.module.scss";

export const SloganSection: FC = () => {
  // TODO: fix slogan postioning
  return (
    <>
      <Container fluid>
        <div className="d-flex flex-row">
          <div className={styles.slogan_col_1}>
            <img
              src="sweater_1.png"
              alt="sweater_1"
              className={styles.slogan_sweater_1}
            />
          </div>
          <div className={styles.slogan_col_2}>
            <img
              className={styles.sweater_slogan}
              src="only_sweater_slogan.png"
              alt="sweater_2"
            />
            {/* <img
              className={styles.slogan_sweater_2}
              src="sweater_2.png"
              alt="sweater_2"
            /> */}
          </div>
          <div className={styles.slogan_col_1}>
            <img
              className={styles.slogan_sweater_3}
              src="sweater_3.png"
              alt="sweater_3"
            />
          </div>
        </div>
      </Container>
      <div className={styles.separator}>
        新規登録で１０％オフキャンペーン実施中！
      </div>
    </>
  );
};
