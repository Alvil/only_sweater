import React, { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "styles/components/NavigationBar.module.scss";
import { FacebookIcon, InstagramIcon, OnlySweatersLogo } from "../atoms";

export const NavigationBar: FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="light"
      className="libre-baskerville"
    >
      <Navbar.Brand href="/" className="text-center ms-3">
        <OnlySweatersLogo />
        <span className={styles.tag_line}>We sell only sweaters</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={styles.navbar_collapse}
      >
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
          <Nav.Item className={styles.nav_item}>Tel: 0312345678</Nav.Item>
          <Nav.Item className={styles.nav_item}>
            Email: onlysweater@jp.com
          </Nav.Item>
          <Nav.Link href="#instagram" className={styles.link_icon}>
            <InstagramIcon />
          </Nav.Link>
          <Nav.Link href="#fb" className={styles.link_icon}>
            <FacebookIcon />
          </Nav.Link>
          <div className={styles.narrow_screen_icons}>
            <Nav.Link href="#instagram">
              <InstagramIcon />
            </Nav.Link>
            <Nav.Link href="#fb">
              <FacebookIcon />
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
