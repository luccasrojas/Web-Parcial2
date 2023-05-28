import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"; // Archivo CSS personalizado
import {Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged,setLogged] = useState(undefined);
  const navigate = useNavigate();


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({"login":username,"password":password})
    const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: body,
    }).then((response) => response.json());
    console.log(body)
    console.log(response)
    if (response.status=="success") {
    setLogged(true);
    navigate('/cafes');
    } else {
    setLogged(false);
    }
    console.log(logged)
  };

  return (
<div>
  <h1 className="elAromaMagico">
    <FormattedMessage id="title" />
  </h1>
  <img className="cafeImageTitle" src="https://cdn.discordapp.com/attachments/1071192635752071168/1111641106610925648/image.png" alt="Café" />
  <p className="inicioSesion">
    <FormattedMessage id="login" />
  </p>
  <div className="loginCard">
    <div className="card-body">
      <form onSubmit={handleLoginFormSubmit}>
        <Row>
          <div className="input-container">
            <Col>
              <h3 className="nombreUsuario">
                <FormattedMessage id="username" />
              </h3>
              <input
                type="text"
                id="username"
                className="campoInput"
                value={username}
                onChange={handleUsernameChange}
              />
            </Col>
            <Col>
              <h3 className="contrasenia">
                <FormattedMessage id="password" />
              </h3>
              <input
                type="password"
                id="password"
                className="campoInput"
                value={password}
                onChange={handlePasswordChange}
              />
            </Col>
          </div>
        </Row>
        <h2></h2>
        <Row>
        <button type="submit" className="botonIngresar">
          <FormattedMessage id="accept" />
        </button>

        <button type="button" className="botonCancelar">
          <FormattedMessage id="cancel" />
        </button>
        </Row>
      </form>
    </div>
  </div>
</div>

  );
};

export default LoginForm;
