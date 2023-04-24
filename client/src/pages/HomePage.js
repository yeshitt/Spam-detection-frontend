import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import CallRecInput from "../Components/CallRecInput";
import NavbarMain from "../Components/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

function Home() {
  let [number, setNumber] = useState(true);
  return (
    <div>
      <NavbarMain />
      <Container>
        <div className="inputType">
          <Button
            className="mt-4 mx-auto"
            variant="secondary"
            style={{ width: "200" }}
            size="lg"
            active={number ? true : false}
            id="text"
            name="inputType"
            value="Text Message"
            onClick={() => setNumber(true)}
          >
            Text Message
          </Button>{" "}
          <Button
            className="mt-4"
            variant="secondary"
            size="lg"
            active={number ? false : true}
            id="callRec"
            name="inputType"
            value="Call Recording"
            onClick={() => setNumber(false)}
          >
            Call
          </Button>
        </div>
        {number ? <TextInput /> : <CallRecInput />}
      </Container>
    </div>
  );
}

export default Home;
