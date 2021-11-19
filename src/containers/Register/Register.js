import React, { useState, SyntheticEvent } from "react";
import "./Register.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import registerImage from "../../assets/registerImage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function Register(props) {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordConfirm, SetPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShow(confirmPasswordShow ? false : true);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError(
        <div className="text-danger">
          <FontAwesomeIcon icon={faExclamation} className="warning-icon" />
          Konfirmasi Password harus sama dengan Password
        </div>
      );
    } else {
      const data = {
        fullname: name,
        email: email,
        password: password,
        password_confirm: passwordConfirm,
      };

      // axios.get("/sanctum/csrf-cookie").then((response) => {
      axios
        .post("/register", data)
        .then((res) => {
          console.log(res.data.failed);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.user.username);
          setLogin(true);
          props.setUser(res.data.user);
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
      // });
    }
  };

  if (login === true) {
    return <Redirect to="/" />;
  }

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
                    <label htmlFor="floatingInput">Nama Lengkap</label>
                  </div>
                </div>

                <div className="form-field">
                  <FontAwesomeIcon icon={faEnvelope} className="icon-form" />
                  <div className="form-floating w-100%">
                    <input
                      type="email"
                      className="form-control form-noborder"
                      id="floatingInput"
                      placeholder="Email"
                      onChange={(e) => SetEmail(e.target.value)}
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
                      placeholder="Kata sandi"
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Kata sandi</label>
                    <FontAwesomeIcon
                      onClick={togglePasswordVisiblity}
                      icon={passwordShow ? faEye : faEyeSlash}
                      className="password-visible fa-lg"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <FontAwesomeIcon icon={faLock} className="icon-form" />

                  <div className="form-floating">
                    <input
                      type={confirmPasswordShow ? "text" : "password"}
                      className="form-control form-noborder"
                      id="floatingPassword"
                      placeholder="Konfirmasi kata sandi"
                      onChange={(e) => SetPasswordConfirm(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">
                      Konfirmasi kata sandi
                    </label>
                    <FontAwesomeIcon
                      onClick={toggleConfirmPasswordVisibility}
                      icon={confirmPasswordShow ? faEye : faEyeSlash}
                      className="password-visible fa-lg"
                    />
                  </div>
                </div>

                {error}

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
                Sudah punya akun? <Link to="/login">Masuk</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Register;
