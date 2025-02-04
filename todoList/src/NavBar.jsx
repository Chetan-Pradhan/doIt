import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripLines,
  faBorderAll,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

import logo from "./Union.png";
import "./navbar.css";
import { useState } from "react";
import Profile from "./Profile";

export default function NavBar({
  showNav,
  setshowNav,
  setview,
  view,
  dayn,
  setdayn,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Navbar expand="lg" style={{ width: "95%" }}>
        <Container fluid className={dayn ? "back active" : "back"}>
          <div style={{ display: "flex" }}>
            <Navbar.Brand href="#">
              <div onClick={() => setshowNav(!showNav)}>
                <FontAwesomeIcon
                  icon={faGripLines}
                  className={dayn ? "back active" : "back"}
                />
              </div>
            </Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                className={dayn ? "back active" : "back"}
              >
                <img src={logo} alt="logo"></img>
                <p className={dayn ? "switch active" : "switch"}>DoIt</p>
              </Nav.Link>
            </Nav>
          </div>
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{
                  maxHeight: "100px",
                }}
                navbarScroll
              >
                <div className="icons">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="icons" onClick={() => setview(!view)}>
                  <FontAwesomeIcon icon={faBorderAll} />
                </div>
                <div className="icons" onClick={() => setdayn(!dayn)}>
                  <FontAwesomeIcon icon={farMoon} />
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
