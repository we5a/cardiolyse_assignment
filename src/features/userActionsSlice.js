import { createSlice } from "@reduxjs/toolkit";

const userActionsSlice = createSlice({
  name: 'userActions',
  initialState: {
    message: '',
  },
  reducers: {
    messageAdded: (state, action) => {
      state.message = action.payload;
    }
  },
  extraReducers: builder => {
    builder
    .addCase('user/userAdded', (state) => {
      state.message = 'User Added';
    })
  }
});

export const { messageAdded } = userActionsSlice.actions;
export default userActionsSlice.reducer;
