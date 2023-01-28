import React, { FC } from "react";
import styles from "styles/components/Footer.module.scss";

export const FooterSection: FC = () => {
  return (
    <>
      {/* screen >= 768 */}
      <div className={styles.wide_screen_wrapper}>
        <img
          src="sweater_room.png"
          alt="sweater_room"
          className="w-100 opacity-50"
        />
        <img
          src="only_sweater_slogan_full.png"
          alt="only_sweater_slogan_full"
          className={styles.sweater_slogan}
        />
      </div>
      {/* screen < 768 */}
      <div className={styles.narrow_screen_wrapper}>
        <img
          src="sweater_room_single.png"
          alt="sweater_room_single"
          className="w-100 opacity-50"
        />
        <img
          src="only_sweater_slogan_full.png"
          alt="only_sweater_slogan_full"
          className={styles.sweater_slogan}
        />
      </div>
    </>
  );
};
