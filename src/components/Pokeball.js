import React from "react";
import styled, { keyframes } from "styled-components";

export default function Pokeball() {
  return (
    <StyledPokeball>
      <InnerPokeball>
        <div></div>
      </InnerPokeball>
    </StyledPokeball>
  );
}

const shake = keyframes`
0% {
  transform: translate(0, 0) rotate(0);
}
20% {
  transform: translate(-10px, 0) rotate(-30deg);
}
30% {
  transform: translate(10px, 0) rotate(30deg);
}
50% {
  transform: translate(-10px, 0) rotate(-20deg);
}
60% {
  transform: translate(10px, 0) rotate(20deg);
}
100% {
  transform: translate(0, 0) rotate(0);
}
`;

const blink = keyframes`
from {
  background: #eee;
}
to {
  background: #e74c3c;
}
`;

const StyledPokeball = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    124deg,
    rgba(255, 255, 255, 1) 55%,
    rgba(212, 212, 212, 1) 100%
  );
  border-radius: 50%;
  overflow: hidden;
  animation: ${shake} 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
    background: rgb(255, 0, 0);
    background: linear-gradient(
      35deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(128, 0, 0, 1) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 5px);
    width: 100%;
    height: 10px;
    background: #000;
  }
`;

const InnerPokeball = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 10px solid black;
  z-index: 10;

  div {
    width: 30px;
    height: 30px;
    background: lightgray;
    border-radius: 50%;
    animation: ${blink} 0.5s alternate 7;
  }
`;
