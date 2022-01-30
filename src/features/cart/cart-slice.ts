import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  name: string;
  price: number;
};

interface CartState {
  totalAmount: number;
  products: Product[];
}

const initialState: CartState = {
  totalAmount: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart(state) {
      state = {
        products: [],
        totalAmount: 0,
      };
    },
  },
});

export const cartSliceReducers = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;
