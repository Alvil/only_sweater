import React, { FC, HTMLProps } from "react";
import { NavigationBar } from "components/organisms";
import { FooterSection, SubFooterSection } from "components/organisms";

export const Layout: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <section style={{ paddingBottom: "3rem" }}>
        <FooterSection />
      </section>
      <SubFooterSection />
    </>
  );
};
