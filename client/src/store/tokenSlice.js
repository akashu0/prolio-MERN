import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: false,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.user = true;
    },
    clearToken: (state, action) => {
      state.token = null;
      state.user = false;
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
