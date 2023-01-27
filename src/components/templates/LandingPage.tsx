import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { About, Slogan } from "components/organisms";
import { Layout } from "components/templates";

export const LandingPage: FC = () => {
  return (
    <Layout>
      <Container fluid>
        <Slogan />
        <About />
      </Container>
    </Layout>
  );
};
