import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
    chat: null
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {},
  });

  export const create = createAsyncThunk("chat/create", async (chat) => {
    try {
      return await chatService.create(chat);
    } catch (error) {
      console.error(error);
    }
  });

  export default chatSlice.reducer;
