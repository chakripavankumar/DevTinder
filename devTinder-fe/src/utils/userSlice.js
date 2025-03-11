/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState , 
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      localStorage.removeItem("user")
      return null;
    },
  },
});


export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
