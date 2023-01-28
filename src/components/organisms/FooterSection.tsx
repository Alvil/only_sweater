import React, { FC } from "react";
import styles from "styles/components/BottomSlogan.module.scss";

export const FooterSection: FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="sweater_room.png"
        alt="sweater_room"
        className="w-100 opacity-50"
      />
      <img
        src="only_sweater_slogan_full.png"
        alt="only_sweater_slogan"
        className={styles.sweater_slogan}
      />
    </div>
  );
};
