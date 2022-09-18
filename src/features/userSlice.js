import { createSlice } from "@reduxjs/toolkit";
import { role } from "../assets/properties";

const initialState = {
  name: '',
  role,
  greeting: 'Welcome',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      state.name = action.payload.name;
      state.greeting = action.payload.greeting;
    },
    userRemoved: state => {
      state.name = initialState.name;
      state.greeting = initialState.greeting;
    }
  }
});

export const { userAdded, userRemoved } = userSlice.actions;
export default userSlice.reducer;
