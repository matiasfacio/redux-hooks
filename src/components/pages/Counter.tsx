import React from "react";
import { counterSliceActions } from "../../features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Title } from "../elements/Title";
import styled from "styled-components";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);
  const incrementValue = () => dispatch(counterSliceActions.incremented());
  const addFive = () => dispatch(counterSliceActions.amountAdded(5));
  return (
    <CounterContainer>
      <Title>Counter</Title>
      <div className="counter">
        Count: {value}
        <br />
        <div>
          <button onClick={incrementValue}>Increment</button>
          <button onClick={addFive}>add 5</button>
        </div>
      </div>
    </CounterContainer>
  );
};

const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: var(--container-bg-color);
  border-radius: 40px;
  padding: 20px;
  box-shadow: var(--container-shadow);
`;
