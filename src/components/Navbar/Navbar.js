import React from "react";
import "./Navbar.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
} from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function NavbarComp(props) {
  const handleLogout = () => {
    localStorage.clear();
    props.setUser(null);
  };

  const username = localStorage.getItem("username");

  let link;
  let button;
  if (props.user) {
    link = (
      <Nav.Link className="text-white px-0" href="#5">
        Notifikasi
      </Nav.Link>
    );
    button = (
      <Dropdown className="button-nav-dropdown">
        <Dropdown.Toggle
          variant="outline-light"
          className="outline-white shadow-none"
        >
          {username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="nav-dropdown-item">Profil</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="nav-dropdown-item" onClick={handleLogout}>
            Keluar
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    button = (
      <Link to="/login">
        <Button variant="outline-light" className="outline-white nav-btn">
          Login
        </Button>
      </Link>
    );
  }

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
            {link}
          </Nav>
          {button}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
