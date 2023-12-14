import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    updateAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount, updateAccount } = accountSlice.actions;
export default accountSlice.reducer;
