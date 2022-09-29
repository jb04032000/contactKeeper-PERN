import { createSlice } from "@reduxjs/toolkit";

const name = "auth";
const initialState = {
  token: null,
  isAuthenticated: false,
  message: "",
  error: "",
  loading: false,
  user: [],
};

const getAuthOperations = {
  authOperationRequested: (state) => {
    state.loading = true;
  },
  authOperationFail: (state, action) => {
    state.loading = false;
  },
};

export const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    ...getAuthOperations,
  },
});

export const { authOperationRequested, authOperationFail } = authSlice.actions;

export default authSlice.reducer;
