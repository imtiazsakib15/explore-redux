import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.cart += 1;
    },
    removeFromCart: (state) => {
      state.cart -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
