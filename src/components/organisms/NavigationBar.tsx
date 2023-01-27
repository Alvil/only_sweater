import React, { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "styles/components/NavigationBar.module.scss";
import { FbLogo, InstagramLogo, OnlySweatersLogo } from "../atoms";

export const NavigationBar: FC = () => {
  // TODO: fix navbar on sm display
  return (
    <Navbar collapseOnSelect expand="md" variant="light">
      <Container fluid>
        <Navbar.Brand href="/" className="text-center">
          <OnlySweatersLogo />
          <span className={styles.tag_line}>We sell only sweaters</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav d-flex">
          <Nav className="justify-content-end ms-auto">
            <Nav.Link href="/about" className={styles.link}>
              About
            </Nav.Link>
            <Nav.Link href="/item" className={styles.link}>
              Item
            </Nav.Link>
            <Nav.Link href="/shop" className={styles.link}>
              Shop
            </Nav.Link>
            <Nav.Link href="/info" className={styles.link}>
              Info
            </Nav.Link>
            <Nav.Link href="/press" className={styles.link}>
              Press
            </Nav.Link>
            <Nav.Link href="#instagram" className="ms-5">
              <InstagramLogo />
            </Nav.Link>
            <Nav.Link href="#fb">
              <FbLogo />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
