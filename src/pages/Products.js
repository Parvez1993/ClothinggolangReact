import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sort from "../components/Sort";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
function Products() {
  return (
    <Container>
      <Hero products="products" />
      <Row>
        <Col lg={2}>
          <Filter />
        </Col>
        <Col lg={10}>
          <Row>
            <Col>
              <Sort />
              <ProductList />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
