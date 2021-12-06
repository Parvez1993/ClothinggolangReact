import axios from "axios";
import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Form, Container, Header, Icon, Button } from "semantic-ui-react";

function UserSignup() {
  const [first_name, setFName] = React.useState("");
  const [last_name, setLName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      first_name === "" &&
      last_name === "" &&
      phone === "" &&
      email === "" &&
      password === ""
    ) {
      return setError("Please fill out all the information");
    }

    const data = new FormData(e.target);
    const payload = Object.fromEntries(data.entries());
    let stringifyPayload = JSON.stringify(payload);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(payload);
    console.log(JSON.stringify(payload));
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: myHeaders,
    };
    fetch(`http://localhost:4000/v1/signup`, requestOptions)
      .then((response) => {
        return response.text();
      })
      .then((data) => (data ? JSON.parse(data) : {}))
      .then((data) => {
        if (data.error) {
          setError(data.error.message);
        } else {
          navigate("/login");
        }
      });

    // try {
    //   fetch("http://localhost:4000/v1/signup", requestOptions).then(
    //     async (response) => {
    //       const data = await response.json();

    //       // check for error response
    //       if (data.error) {
    //         // get error message from body or default to response statusText

    //         return setError(data.error.message);
    //       }

    //       console.log(data);

    //       setSuccess("Successfully Created Redirecting in 1 second");
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    //   setError(error.message);
    // }
  };

  useEffect(() => {
    if (error.length > 1) {
      setTimeout(() => {
        setError("");
      }, [8000]);
    }
  }, [error.length]);

  useEffect(() => {
    if (success.length > 1) {
      setTimeout(() => {
        setSuccess("");
      }, [1000]);
    }
  }, [success.length]);

  let navigate = useNavigate();

  // if (success) {
  // }

  return (
    <Container>
      <div style={{ padding: "20px 0", margin: "100px 0" }}>
        {error ? <Alert>{error}</Alert> : ""}
        {success ? <Alert variant="success">{success}</Alert> : ""}
        <Header as="h2" icon textAlign="center">
          <Icon name="user" />
          Account Settings
          <Header.Subheader></Header.Subheader>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={(e) => setFName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={(e) => setLName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input
              type="tel"
              placeholder="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Button size="big">Submit</Button>
        </Form>
      </div>
    </Container>
  );
}

export default UserSignup;
