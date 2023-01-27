import React, { FC, HTMLProps } from "react";
import { NavigationBar } from "components/organisms";
import {
  BottomSloganSection,
  FooterSection,
  SubFooterSection,
} from "components/organisms";

export const Layout: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <section style={{ paddingBottom: "8rem" }}>
        <BottomSloganSection />
      </section>
      <section style={{ paddingBottom: "8rem" }}>
        <FooterSection />
      </section>
      <SubFooterSection />
    </>
  );
};
