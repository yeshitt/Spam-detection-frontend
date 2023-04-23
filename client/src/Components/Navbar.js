import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarMain() {
  return (
    <div>
      <Navbar className="mb-3" expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar className="text-light py-3">Spam Detection System</Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMain;
