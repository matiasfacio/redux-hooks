import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducers } from "../features/cart/cart-slice";
import { counterSliceReducer } from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    cart: cartSliceReducers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
