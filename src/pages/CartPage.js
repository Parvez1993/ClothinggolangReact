import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartContent from "../components/CartContent";
import CartTotal from "../components/CartTotal";
import Hero from "../components/Hero";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import { useUserContext } from "../admin/contextapi";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
function CartPage() {
  const { cart, clearCart } = useCartContext();
  const { user } = useUserContext();

  if (cart.length < 1) {
    return (
      <>
        <Wrapper>
          <div className="empty_message">
            <h2>Cart is empty</h2>
            <Button className="blue_btn">See Products</Button>
          </div>
        </Wrapper>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <div className="navigation">
            <Hero link={`cart`} products />
          </div>
          <Row style={{ height: "75vh" }}>
            <Col lg={8}>
              <CartContent />
              <div className="clear_btn">
                <Button
                  variant="danger"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  CLEAR ALL
                </Button>
                {user.jwt ? (
                  <Link to="/checkout">
                    <Button variant="success">Check out</Button>
                  </Link>
                ) : (
                  <Link to="/login">Please login to proceed</Link>
                )}
              </div>
            </Col>
            <Col>
              <CartTotal />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const Wrapper = styled.div`
  .empty_message {
    background: #fefefe;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 50px;
    }
    .blue_btn {
      padding: 10px;
      font-size: 25px;
    }
  }
`;
export default CartPage;
