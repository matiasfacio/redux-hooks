import React, { FC } from "react";
import styled from "styled-components";

export const Title: FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.div`
  font-size: 1rem;
  margin: 0 0 20px 0;
  padding: 10px 20px;
  border-radius: 15px;
  width: fit-content;
  color: var(--white);
  font-weight: 700;
  background-color: var(--container-bg-color);
`;
