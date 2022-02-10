import React from "react";
import styled from "styled-components";
import { Title } from "../elements/Title";

export const Home = () => {
  return (
    <HomeContainer>
      <Title>Home</Title>
      <BoxContainer>
        <PlayingShadow />
        <PlayingShadowOut />
      </BoxContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

const PlayingShadow = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 40px;
  box-shadow: inset 10px 10px 10px #6574648a;
  &:hover {
    transform: translateY(-5px);
  }
`;

const PlayingShadowOut = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 40px;
  box-shadow: 10px 10px 10px #6574648a;
  &:hover {
    transform: translateY(-5px);
  }
`;
