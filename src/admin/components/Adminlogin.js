import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Header, Icon } from "semantic-ui-react";
import { useUserContext } from "../contextapi";
import img from "../../images/login.jpg";
import { Col, Row } from "react-bootstrap";
function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data.entries());

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
    };
    await fetch("http://localhost:4000//v1/signin", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(Object.values(data)[0]);
        window.localStorage.setItem(
          "user",
          JSON.stringify(Object.values(data)[0])
        );
      })
      .then((data) => {
        setEmail("");
        setPassword("");
      })
      .then(() => {
        navigate("/admin");
      });
  };
  console.log(user);
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <img src={img} alt="img" style={{ width: "80%", height: "100%" }} />
        </Col>
        <Col lg={6} className="my-auto">
          <Header as="h2" icon>
            <Icon name="lock" />
            Account Settings
            <Header.Subheader></Header.Subheader>
          </Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>

            <Button>Submit</Button>
          </Form>

          <h3>
            Dont have an Account? <Link to="/signup">Sign Up</Link>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Adminlogin;
