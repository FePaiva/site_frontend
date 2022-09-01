import { Link } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userData = { ...formData };

    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log("user", user);
        setFormData({
          username: "",
          password: "",
        });
        window.location.reload(true);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label> Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label> Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
