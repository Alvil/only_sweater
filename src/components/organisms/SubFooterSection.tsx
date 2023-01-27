import React, { FC } from "react";
import { Container } from "react-bootstrap";

export const SubFooterSection: FC = () => {
  return (
    <Container className="w-75">
      <div className="border-bottom mb-1 pb-4">
        <div className="pb-1">Tel: 0312345678</div>
        <div>Email: onlysweater@jp.com</div>
      </div>
      <div className="text-center m-3">
        <span>2022@only sweater</span>
      </div>
    </Container>
  );
};
