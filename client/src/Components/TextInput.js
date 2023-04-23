import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TextInput() {
  return (
    <Form className="py-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="h3">
          Please enter the source ( Email/SMS ){" "}
        </Form.Label>
        <Form.Control type="email" placeholder="Source" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h3">Enter text</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TextInput;
