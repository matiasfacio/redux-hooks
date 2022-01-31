import React from "react";
import { Profil } from "../images/Profil";
import styled from "styled-components";

export const TopRightMenu = () => {
  return (
    <StyledTopRightMenu>
      <ul>
        <MenuItem>
          <Profil active />
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
  display: inline-block;
  margin: 10px 0;
  list-style: none;
  background-color: var(--black);
  border-radius: 50%;
  width: fit-content;
  height: auto;
  padding: 10px 15px;
  border: 2px var(--white) solid;
  cursor: pointer;
  :hover {
    border: 2px var(--white) solid;
  }
`;
