import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { AboutSection, SloganSection } from "components/organisms";
import { Layout } from "components/templates";

export const LandingPage: FC = () => {
  return (
    <Layout>
      <Container fluid>
        <SloganSection />
        <AboutSection />
      </Container>
    </Layout>
  );
};
