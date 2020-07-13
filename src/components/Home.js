import React, { useContext } from "react";
import Pokeball from "./Pokeball";
import styled from "styled-components";
import LoginContext from './auth/loginContext'

function Home() {
  const { user } = useContext(LoginContext)
  return (
    <Container>
      {user
        ? <p>Hello {user.displayName}, nice to see you again!</p>
        : null
      }
      <Pokeball />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
`;
