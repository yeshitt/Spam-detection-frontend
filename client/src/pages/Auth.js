import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../style/auth.css";
import Button from "react-bootstrap/Button";
function Auth() {
  const [doLogin, setDoLogin] = useState(false);
  return (
    <div>
      <Navbar className="mb-4 py-3" expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar className="text-light h1 py-3" id="nav">
            <div className="heading">Spam Alert System</div>
            <div>
              <Button className="mx-5" onClick={() => setDoLogin(true)}>
                Login
              </Button>
              <Button className="mx-5" onClick={() => setDoLogin(false)}>
                Sign Up
              </Button>
            </div>
          </Navbar>
        </Container>
      </Navbar>
      <Container>
        <div>{doLogin ? <Login /> : <Register />}</div>
      </Container>
    </div>
  );
}

export default Auth;
