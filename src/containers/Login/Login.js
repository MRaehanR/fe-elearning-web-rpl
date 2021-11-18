import React, { useState } from "react";
import "./Login.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import loginImage from "../../assets/loginImage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const data = {
      username: name,
      password: password,
    };

    axios
      .post("/login", data)
      .then((res) => {
        console.log(res.data.failed);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        setLogin(true);
        // props.setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err.response.data.description);
        setError(
          <div className="text-danger">
            <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
            {err.response.data.description}
          </div>
        );
      });
  };

  if (login === true) {
    return <Redirect to="/" />;
  }

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
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <FontAwesomeIcon icon={faUser} className="icon-form" />
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-noborder"
                      id="floatingInput"
                      placeholder="Username"
                      onChange={(e) => SetName(e.target.value)}
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
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <FontAwesomeIcon
                      onClick={togglePasswordVisiblity}
                      icon={passwordShow ? faEye : faEyeSlash}
                      className="password-visible fa-lg"
                    />
                  </div>
                </div>
                {error}
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
                Belum punya akun? <Link to="/register">Daftar</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
