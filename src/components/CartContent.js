import React from "react";
import { Table } from "react-bootstrap";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
function CartContent() {
  const { cart, removeItem, toggleAmount } = useCartContext();
  const increase = (id) => {
    toggleAmount(id, "inc");
  };
  const decrease = (id) => {
    toggleAmount(id, "dec");
  };

  console.log("cart", cart);

  return (
    <>
      <Wrapper>
        <h3>Your Shopping Cart</h3>
        <Table striped bordered hover className="w-75 align-middle">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quanity</th>
              <th>Size</th>
              <th>Image</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <AmountButtons
                      amount={item.amount}
                      increase={() => increase(item.id)}
                      decrease={() => decrease(item.id)}
                    />
                  </td>
                  <td>{item.size}</td>
                  <td>
                    <img src={item.image} alt="img" width="100" />
                  </td>
                  <td>{item.price * item.amount}</td>
                  <td>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
}

let Wrapper = styled.div`
  .remove-btn {
    border: none;
    color: red;
  }
`;

export default CartContent;
