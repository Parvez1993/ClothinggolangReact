import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        <h3>&copy; Golang and React Ecommerce</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .footer {
    background: #07183b;

    h3 {
      text-align: center;
      color: white;
      font-size: 25px;
    }
  }
`;

export default Footer;
