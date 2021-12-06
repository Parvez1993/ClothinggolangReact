import { Tab } from "bootstrap";
import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import List from "./List";
import Products from "./Products";

function AdminPanel() {
  let history = useLocation();
  console.log(history);
  return (
    <>
      <Container>
        <Row class="py-5">
          <Col lg={3}>
            <List />
          </Col>
          <Col lg={6}>Welcome to Admin Panel</Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPanel;
