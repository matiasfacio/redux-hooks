import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

export const Home = () => {
  return (
    <HomeContainer>
      <Title>Home</Title>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
