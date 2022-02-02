import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [selected, setSelected] = React.useState<number>(1);

  return (
    <StyledMenu>
      <ul>
        <MenuItem
          to="/"
          selected={selected === 1}
          onClick={() => setSelected(1)}
        >
          Tango Libre
        </MenuItem>
        <MenuItem
          to="/team"
          selected={selected === 2}
          onClick={() => setSelected(2)}
        >
          Team
        </MenuItem>
        <MenuItem
          to="/bookaclass"
          selected={selected === 3}
          onClick={() => setSelected(3)}
        >
          Book Group Class
        </MenuItem>
        <MenuItem
          to="/"
          selected={selected === 4}
          onClick={() => setSelected(4)}
        >
          Book Private Class
        </MenuItem>
        <MenuItem
          to="/cart"
          selected={selected === 5}
          onClick={() => setSelected(5)}
        >
          Shopping
        </MenuItem>
        <MenuItem
          to="/counter"
          selected={selected === 6}
          onClick={() => setSelected(6)}
        >
          Counter
        </MenuItem>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  height: 300px;

  ul {
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    gap: 10px;
    border-radius: 40px;
    background-color: var(--menu-bg-color);
    box-shadow: var(--container-shadow);
  }
`;

const MenuItem = styled(Link)<{ selected?: boolean }>`
  border-radius: 20px;
  padding: 0.7rem;
  width: 150px;
  color: white;
  font-weight: 600;
  text-align: left;
  text-transform: capitalize;
  font-size: 0.8rem;

  :active,
  :hover {
    background-color: var(--main-bg-color);
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--main-bg-color);
      color: var(--white);
    `}
`;
