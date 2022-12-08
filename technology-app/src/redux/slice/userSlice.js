import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    STORE_USERS(state, action) {
        // console.log(action.payload);
      state.products = action.payload.products;
    },
  },
});

export const { STORE_USERS } = userSlice.actions;

export const selectUsers = (state) => state.product.products;

export default userSlice.reducer;
