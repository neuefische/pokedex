import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/pokedex">Pokedex</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  border: none;
  font-size: 18px;
  color: white;
  text-decoration: none;

  &:hover {
    color: rgba(128, 0, 0, 1);
    background: white;
  }
`;
