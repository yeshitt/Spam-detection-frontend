import React, { useState } from "react";
import TextInput from "../Components/TextInput";
import CallRecInput from "../Components/CallRecInput";
import NavbarMain from "../Components/Navbar";
import Button from "react-bootstrap/Button";

function Home() {
  let [number, setNumber] = useState(true);
  return (
    <div>
      <NavbarMain />

      <div className="inputType">
        <Button
          className="mt-4 mx-auto"
          variant="secondary"
          style={{ width: "200" }}
          size="lg"
          active
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
          active
          id="callRec"
          name="inputType"
          value="Call Recording"
          onClick={() => setNumber(false)}
        >
          Call
        </Button>
      </div>
      {number ? <TextInput /> : <CallRecInput />}
    </div>
  );
}

export default Home;