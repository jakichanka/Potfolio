import styled from "styled-components";

export const Heading = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  position: relative;
  display: flex;
  cursor: default;
  font-size: 5rem;
  transform: skewY(-15deg);
  background: linear-gradient(90deg, hsla(157, 79%, 62%, 1) 0%, hsla(63, 100%, 63%, 1) 97%);
  :before {
    content: "";
    position: absolute;
    width: 10vw;
    transform-origin: right;
    height: 100%;
    left: -10vw;
    transform: skewY(45deg);
    filter: brightness(0.8);
    background: linear-gradient(90deg, hsla(157, 79%, 62%, 1) 0%, hsla(63, 100%, 63%, 1) 97%);
  }
  :after {
    content: "";
    position: absolute;
    width: 100%;
    transform-origin: bottom;
    height: 10vw;
    top: -10vw;
    left: 0;
    transform: skewX(45deg);
    filter: brightness(0.85);
    background: linear-gradient(90deg, hsla(157, 79%, 62%, 1) 0%, hsla(63, 100%, 63%, 1) 97%);
    box-shadow: -30vw 30vw 20px rgba(0, 0, 0, 0.1);
  }
  div {
    :first-child {
      padding-left: 1rem;
    }
    :last-child {
      padding-right: 1rem;
    }
  }
`
