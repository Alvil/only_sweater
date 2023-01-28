import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/Slogan.module.scss";

export const SloganSection: FC = () => {
  return (
    <>
      <Container fluid>
        {/* screen width >=768 */}
        <div className={styles.wide_screen_wrapper}>
          <div className="d-flex flex-row justify-content-center">
            <div className={styles.side_column}>
              <img
                src="sweater_1.png"
                alt="sweater_1"
                className={styles.sweater_1}
              />
            </div>
            <div className={styles.middle_column}>
              <img
                className={styles.sweater_slogan}
                src="only_sweater_slogan.png"
                alt="sweater_2"
              />
              <img
                className={styles.sweater_2}
                src="sweater_2.png"
                alt="sweater_2"
              />
            </div>
            <div className={styles.side_column}>
              <img
                className={styles.sweater_3}
                src="sweater_3.png"
                alt="sweater_3"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* screen width <768 */}
      <div className={styles.narrow_screen_wrapper}>
        <img className={styles.sweater_2} src="sweater_2.png" alt="sweater_2" />
      </div>
      {/* always visible */}
      <div className={styles.separator}>
        新規登録で１０％オフキャンペーン実施中！
      </div>
      {/* screen width <768 */}
      <div className={styles.narrow_screen_wrapper}>
        <img
          className={styles.sweater_slogan}
          src="only_sweater_slogan.png"
          alt="only_sweater_slogan"
        />
        <div className="d-flex justify-content-between pt-5">
          <img className="w-50 p-1" src="sweater_4.png" alt="sweater_4" />
          <img className="w-50 p-1" src="sweater_6.png" alt="sweater_6" />
        </div>
      </div>
    </>
  );
};
