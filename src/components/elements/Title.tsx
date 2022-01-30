import React, { FC } from "react";
import styled from "styled-components";

export const Title: FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
  padding-bottom: 5px;
  width: fit-content;
  color: var(--white);
  font-weight: 700;
`;
