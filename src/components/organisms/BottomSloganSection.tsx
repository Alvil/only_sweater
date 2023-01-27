import React, { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/components/BottomSlogan.module.scss";

export const BottomSloganSection: FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="sweater_room.png"
        alt="sweater_room"
        className="w-100 opacity-50"
      />
      <img
        src="only_sweater_slogan_full.png"
        alt="sweater_room"
        className={styles.sweater_slogan}
      />
    </div>
  );
};
