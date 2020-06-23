import React from "react";
import Pokeball from "./Pokeball";
import styled from "styled-components";

function Home() {
  return (
    <Container>
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
