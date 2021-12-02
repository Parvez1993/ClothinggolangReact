import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import featured from "../images/featured.jpg";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useProductsContext } from "../context/product_context";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import Product from "./Product";

AOS.init();

function Featured() {
  const { products } = useProductsContext();

  return (
    <>
      <Wrapper>
        <Container>
          <div className="heading my-5">
            <h2 className="text-center">Featured Hot List</h2>
          </div>
          <div className="main">
            {products.slice(0, 3).map((i) => {
              return <Product key={i.id} {...i} />;
            })}
          </div>
          <div className="button">
            <Link to="/products">
              <Button className="p-3 blue_btn">All Products</Button>
            </Link>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 50px 0;
  .main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
  }
  .button {
    display: flex;
    justify-content: center;
  }
`;

export default Featured;
