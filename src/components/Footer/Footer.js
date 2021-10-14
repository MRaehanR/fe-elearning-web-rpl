import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoRPL from '../../assets/LogoRPL.svg'
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Container className="d-md-flex pt-4 pb-5">
        <div className="footer-logo pt-3 pe-4">
          <img src={LogoRPL} alt="Logo RPL" />
        </div>
        <div className="footer-body d-md-flex ps-md-5">
          <div className="footer-item">
            <div className="footer-title">About Us</div>
            <div className="footer-link">
              <a href="/">Our Team</a>
              <a href="/">Service</a>
              <a href="/">Credits</a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-title">Community</div>
            <div className="footer-link">
              <a href="/">Tutorials</a>
              <a href="/">Webrusna</a>
              <a href="/">Support</a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-title">Information</div>
            <div className="footer-link">
              <a href="/">cs : +62 8xxxxxx (chat only)</a>
              <a href="/">Webrusna@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="footer-social ms-auto pe-5">
          <div className="footer-title">Follow Us</div>
          <div className="footer-link d-flex">
            <a href="/" className="me-2">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="/" className="me-2">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="/" className="me-2">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="/" className="me-2">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="d-flex justify-content-end border-bottom" style={{fontSize: "13px"}}>
          <a href="/" className="text-decoration-none text-white me-2">FAQ</a>
          <a href="/" className="text-decoration-none text-white me-2">Privacy</a>
          <a href="/" className="text-decoration-none text-white me-2">Term and Conditions</a>
        </div>
        <div className="text-center mt-2 pb-2" style={{fontSize: "13px"}}>
          Copyright&copy;2021, RPL RUS Web Dev
        </div>
      </Container>
    </Container>
  );
}

export default Footer;
