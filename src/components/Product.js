import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Product({ id, image, title, price }) {
  return (
    <>
      <Wrapper>
        <Link to={`/products/${id}`}>
          <div data-aos="flip-left">
            <div className="main">
              <div>
                <img src={image} alt="img1" className="featured_img" />
              </div>
              <div>
                <h5>{title}</h5>
              </div>
              <div>
                <p>BDT {price}</p>
              </div>
            </div>
          </div>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
  .featured_img {
    height: 200px;
  }
  .button {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  }
`;
export default Product;
