import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function SendMessageForm({ sendMessage }) {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };
  return (
    <Form onSubmit={handleSubmit} className="lobby">
      <InputGroup>
        <Form.Control
          placeholder="message"
          as="textarea"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </InputGroup>

      <Button variant="primary" type="submit" disabled={!message}>
        Send
      </Button>
    </Form>
  );
}

export default SendMessageForm;
