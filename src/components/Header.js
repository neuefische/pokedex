import React from "react";
import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <h1>Pokedex</h1>
      {children}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    35deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(128, 0, 0, 1) 100%
  );
  border-radius: 0 0 80px 80px;

  h1 {
    color: white;
    margin: 0 20px;
  }
`;
