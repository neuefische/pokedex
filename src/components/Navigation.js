import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginContext from './auth/loginContext'

export default function Navigation() {
  const { user } = useContext(LoginContext)

  return (
    <StyledNavigation>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink to="/pokedex">Pokedex</StyledLink>
      {user
        ? <StyledLink to="/favlist">Fav List</StyledLink>
        : null
      }
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  border: none;
  font-size: 18px;
  color: white;
  text-decoration: none;

  &:hover,
  &.active {
    color: rgba(128, 0, 0, 1);
    background: white;
  }
`;
