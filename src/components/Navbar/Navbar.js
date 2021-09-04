import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../asset/logo.svg";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-test navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top"
            width="315px"
            heigth="51px"
            alt="rpl logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white px-0" href="#1">
              Beranda
            </Nav.Link>
            <Nav.Link className="text-white px-0" href="#2">
              Pelajaran
            </Nav.Link>
            <NavDropdown title="Paket" id="basic-nav-dropdown">
              <NavDropdown.Item href="/" className="nav-dropdown-item">
                Beli Paket
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" className="nav-dropdown-item">
                Konfirmasi Pembayaran
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-light" className="outline-white nav-btn">
            Masuk
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
