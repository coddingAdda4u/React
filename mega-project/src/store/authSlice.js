import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: function (state, action) {
      state.status = true;
      state.userData = action.payload;
    },
    logOut: function (state) {
      state.status = false;
      state.userData = null;
    }
  }
});


export const { login, logOut } = authSlice.actions;
 
export default authSlice.reducer;