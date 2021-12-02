import React, { useRef } from "react";
import img from "../images/banner.png";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
function Banner() {
  const n = useRef(0);
  const styles = useSpring({
    loop: () => 0 > n.current++,
    delay: 500,
    from: { x: -800 },
    to: { x: 0 },
  });
  const styles2 = useSpring({
    loop: () => 0 > n.current++,
    delay: 800,
    from: { x: -800 },
    to: { x: 0 },
  });
  const styles3 = useSpring({
    loop: () => 0 > n.current++,
    delay: 1000,
    from: { x: -800 },
    to: { x: 0 },
  });

  return (
    <Wrapper>
      <div className="text">
        <animated.div
          style={{
            ...styles,
          }}
        >
          <h1>Trendiest Fashion in Town</h1>
        </animated.div>
        <animated.div
          style={{
            ...styles2,
          }}
        >
          <p>Affordable brands for everyone</p>
        </animated.div>
        <animated.div
          style={{
            ...styles3,
          }}
        >
          <Button>Take a look</Button>
        </animated.div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${img});
  background-size: cover;
  height: 60vh;
  background-position: center;

  .text {
    position: absolute;
    width: 450px;

    transform: translate(50%, 50%);

    h1 {
      font-size: 45px;
    }
    p {
      margin: 20px 0;
      font-size: 28px;
    }
    @media screen and (max-width: 700px) {
      transform: translate(20%, 30%);
      width: 60vw;
    }
  }
`;

export default Banner;
