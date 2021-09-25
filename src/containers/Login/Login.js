import React, { useState } from "react";
import "./Login.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import loginImage from "../../assets/loginImage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  return (
    <div id="login-page">
      <div className="login-card">
        <Container>
          <Row>
            <Col md={6} className="ms-auto">
              <h1 className="login-title">Masuk</h1>
            </Col>
          </Row>

          <Row className="login-form">
            <Col md={6} className="text-center">
              <Image src={loginImage} className="login-image" fluid />
            </Col>
            <Col md={6}>
              <form action="get">
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
                <a href="/" className="forgot-pass">
                  Lupa Password?
                </a>
                <Button
                  variant="primary"
                  type="submit"
                  className="float-end login-button"
                >
                  Masuk
                </Button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="login-check">
                Belum punya akun? <a href="/">Daftar</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
