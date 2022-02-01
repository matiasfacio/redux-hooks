import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <AboutContainer>
      <h1>Matias Facio</h1>
      <a href="https://www.matiasfacio-dev.de">
        <h2>www.matiasfacio-dev.de</h2>
      </a>
      <Close onClick={() => navigate(-1)}>X</Close>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: #1b7272;
  color: white;
  display: grid;
  place-content: center;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
`;
