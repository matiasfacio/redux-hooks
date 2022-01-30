import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// this define the shape of the state inside the slice bellow

interface CounterState {
  value: number;
}

// we initialized the state

const initialState: CounterState = {
  value: 0,
};

// then we define the slice
// it creates action creators

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // it uses Immer under the hood that allows us to perform a 'mutation' without mutating the code.
    incremented(state) {
      state.value++;
    },
    // decrement
    decremented(state) {
      state.value--;
    },
    //reset
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

//

export const counterSliceActions = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
