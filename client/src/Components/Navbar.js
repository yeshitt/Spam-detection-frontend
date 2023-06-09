import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarMain() {
  return (
    <div>
      <Navbar className="mb-1 py-3" expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar className="text-light h1 py-3">Spam Alert System</Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
