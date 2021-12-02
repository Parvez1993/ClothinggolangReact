import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { Button } from "react-bootstrap";
function AddtoCart({ product }) {
  const { id, stock, size } = product;

  const [mainSize, setMainSize] = useState(size[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <>
      <Wrapper>
        <div>
          <h4 className="py-2">Choose your size</h4>
          {size.map((s, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setMainSize(s);
                }}
                className={`${
                  mainSize === s ? "color-btn active" : "color-btn"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        <h4>Choose Amount</h4>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />

        <Button>
          {" "}
          <Link
            to="/cart"
            className="btn nav-heading"
            onClick={() => addToCart(id, mainSize, amount, product)}
          >
            add to cart
          </Link>
        </Button>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .color-btn {
    opacity: 0.3;
    padding: 5px;
    margin: 0 2px;
    background: white;
    color: #07183b;
  }
  .active {
    opacity: 1;
    background: #07183b;
    color: white;
  }
  .btn {
  }
`;

export default AddtoCart;
