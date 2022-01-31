import React from "react";
import { Profil } from "../images/Profil";
import styled from "styled-components";

export const TopRightMenu = () => {
  return (
    <StyledTopRightMenu>
      <ul>
        <MenuItem>
          <Profil active />
          Admin
        </MenuItem>
      </ul>
    </StyledTopRightMenu>
  );
};

const StyledTopRightMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 2vw;
`;

const MenuItem = styled.li`
  background-color: var(--container-bg-color);
  display: inline-block;
  margin: 10px 0;
  list-style: none;
  border-radius: 50%;
  width: fit-content;
  height: auto;
  padding: 10px 15px;
  border: 2px var(--white) solid;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  font-size: 0.6rem;
  cursor: pointer;
  :hover {
    border: 2px var(--white) solid;
  }
`;
