import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CallRecInput() {
  return (
    <div>
      <Form className="py-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="h3">
            Enter the source Phone No.{" "}
          </Form.Label>
          <Form.Control type="email" placeholder="Source" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="h3">Enter audio</Form.Label>
          <Form.Control type="file" accept=".mp3" placeholder="Message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CallRecInput;
