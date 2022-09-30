import { createSlice } from "@reduxjs/toolkit";

const name = "contacts";
const initialState = {
  message: "",
  error: "",
  loading: false,
  contacts: [],
};

const getContactsOperations = {
  getContactListRequested: (state) => {
    state.loading = true;
  },
  getContactListFail: (state, action) => {
    state.loading = false;
  },
  getContactListSuccess: (state, action) => {
    state.loading = false;
    state.contacts = action.payload;
  },
};

export const contactSlice = createSlice({
  name,
  initialState,
  reducers: {
    ...getContactsOperations,
  },
});

export const {
  getContactListRequested,
  getContactListFail,
  getContactListSuccess,
} = contactSlice.actions;

export default contactSlice.reducer;
