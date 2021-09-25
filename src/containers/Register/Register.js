import React, { useState } from "react";
import "./Register.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import registerImage from "../../assets/registerImage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Register() {
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  return (
    <div id="register-page">
      <div className="register-card">
        <Container>
          <Row>
            <Col md={6} className="ms-auto">
              <h1 className="register-title">Daftar</h1>
            </Col>
          </Row>

          <Row className="register-form">
            <Col md={6} className="text-center">
              <Image src={registerImage} className="register-image" fluid />
            </Col>
            <Col md={6}>
              <form action="post">
                <div className="form-field">
                  <FontAwesomeIcon icon={faUser} className="icon-form" />
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-noborder"
                      id="floatingInput"
                      placeholder="Username"
                    />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                </div>

                <div className="form-field">
                  <FontAwesomeIcon icon={faEnvelope} className="icon-form" />
                  <div className="form-floating w-100%">
                    <input
                      type="email"
                      className="form-control form-noborder"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                </div>

                <div className="form-field">
                  <FontAwesomeIcon icon={faLock} className="icon-form" />

                  <div className="form-floating">
                    <input
                      type={passwordShow ? "text" : "password"}
                      className="form-control form-noborder"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <FontAwesomeIcon
                      onClick={togglePasswordVisiblity}
                      icon={passwordShow ? faEye : faEyeSlash}
                      className="password-visible fa-lg"
                    />
                  </div>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className="float-end register-button"
                >
                  Daftar
                </Button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="register-check">
                Sudah punya akun? <a href="/">Masuk</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Register;
