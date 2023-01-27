import React, { FC, HTMLProps } from "react";
import { NavigationBar } from "components/organisms";

export const Layout: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
    </>
  );
};
