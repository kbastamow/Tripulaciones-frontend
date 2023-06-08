import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const register = createAsyncThunk("auth/register", async (user) => {
    try {
        return await authService.register(user);
    } catch (error) {
        console.error(error);
    }
});

export const updateProfile = createAsyncThunk("auth/updateProfile", async (user) => {
  try {
      return await authService.updateProfile(user);
  } catch (error) {
      console.error(error);
  }
});

export default authSlice.reducer;
