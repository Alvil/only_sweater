import React, { FC } from "react";
import { Container } from "react-bootstrap";
import {
  AboutSection,
  InfoSection,
  ItemsSection,
  SloganSection,
} from "components/organisms";
import { Layout } from "components/templates";

export const LandingPage: FC = () => {
  return (
    <Layout>
      <Container fluid>
        <SloganSection />
        <AboutSection />
        <ItemsSection />
        <section style={{ paddingBottom: "5rem" }}>
          <InfoSection />
        </section>
      </Container>
    </Layout>
  );
};
