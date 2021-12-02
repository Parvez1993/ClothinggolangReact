import React from "react";
import { Icon, Step } from "semantic-ui-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
function Services() {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="heading">
            <h2>Get Delivered in a week</h2>
          </div>
          <Step.Group size="medium" widths={3}>
            <Step active>
              <Icon name="payment" />
              <Step.Content>
                <Step.Title>Buy</Step.Title>
              </Step.Content>
            </Step>

            <Step active>
              <Icon name="truck" />
              <Step.Content>
                <Step.Title>Shipping</Step.Title>
              </Step.Content>
            </Step>
            <Step active>
              <Icon name="box" />
              <Step.Content>
                <Step.Title>Get Delivered</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        </Wrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  margin: 100px 0;
  .heading {
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Services;
