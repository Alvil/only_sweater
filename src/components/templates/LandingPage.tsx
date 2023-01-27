import React, { FC } from "react";
import { Container } from "react-bootstrap";
import {
  AboutSection,
  ContactSection,
  InfoSection,
  ItemsSection,
  SloganSection,
} from "components/organisms";
import { Layout } from "components/templates";

export const LandingPage: FC = () => {
  return (
    <Layout>
      <Container fluid>
        <section style={{ paddingBottom: "10rem" }}>
          <SloganSection />
        </section>
        <section style={{ paddingBottom: "10rem" }}>
          <AboutSection />
        </section>
        <section style={{ paddingBottom: "8rem" }}>
          <ItemsSection />
        </section>
        <section style={{ paddingBottom: "5rem" }}>
          <InfoSection />
        </section>
        <section style={{ paddingBottom: "5rem" }}>
          <ContactSection />
        </section>
      </Container>
    </Layout>
  );
};
