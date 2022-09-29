import { createSlice } from "@reduxjs/toolkit";

const name = "contacts";
const initialState = {
  message: "",
  error: "",
  loading: false,
  contacts: [],
};

const getContactsOperations = {
  contactOperationRequested: (state) => {
    state.loading = true;
  },
  contactOperationFail: (state, action) => {
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
  contactOperationRequested,
  contactOperationFail,
  getContactListSuccess,
} = contactSlice.actions;

export default contactSlice.reducer;
