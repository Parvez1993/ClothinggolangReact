import React from "react";
import { Container } from "react-bootstrap";
import men from "../images/men.png";
import woman from "../images/woman.png";
import styled from "styled-components";

function Category() {
  return (
    <>
      <Container>
        <Wrapper>
          {" "}
          <div
            className="heading my-5 py-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="text-center">Dive into</h2>
          </div>
          <div className="image-container">
            <div className="men" data-aos="zoom-in-left" data-aos-delay="500">
              <img src={men} alt="men" className="img_category" />
            </div>
            <div
              className="woman"
              data-aos="zoom-in-right"
              data-aos-delay="500"
            >
              <img src={woman} alt="woman" className="img_category" />
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  .image-container {
    display: flex;

    .img_category {
      width: 100%;
    }
  }
`;

export default Category;
