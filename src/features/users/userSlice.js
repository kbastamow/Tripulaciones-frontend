import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  users: [],
};

export const getAll = createAsyncThunk("user/getAll", async () => {
  try {
    return await userService.getAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
