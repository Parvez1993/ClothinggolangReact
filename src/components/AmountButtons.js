import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";
function AmountButtons({ increase, decrease, amount }) {
  return (
    <Wrapper>
      <button type="button" className="amount_btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h3>{amount}</h3>
      <button type="button" className="amount_btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;

  .amount_btn {
    background: white;
    color: #07183b;
    padding: 5px;
  }
`;
export default AmountButtons;
