import React from "react";
import Product from "./Product";
import styled from "styled-components";
function GridView({ products }) {
  return (
    <>
      <Wrapper>
        <div className="main">
          {products.map((i) => {
            return <Product key={i.id} {...i} />;
          })}
        </div>
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
    justify-content: space-evenly;
  }
`;
export default GridView;
