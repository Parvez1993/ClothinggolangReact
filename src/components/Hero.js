import React from "react";

import { Link } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";
import styled from "styled-components";
function Hero({ link, products }) {
  return (
    <Wrapper>
      <Breadcrumb size="massive">
        <Breadcrumb.Section>
          <Link to="/">Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>
          {products ? <Link to="/products">Products</Link> : ""}
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>{link}</Breadcrumb.Section>
      </Breadcrumb>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 20px;
  margin: 50px 0;
  font-weight: bold;
`;
export default Hero;
