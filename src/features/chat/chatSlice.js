import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    chat: null,
    chatMessages: [],
    socketMessages: []
}

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {   //SOCKET MESSAGES!
      addSocketMessage: (state, action) => {
        console.log("addSocket", action.payload)
        state.socketMessages.push(action.payload);
      }},
    extraReducers: (builder) => {
      builder
        .addCase(create.fulfilled, (state, action) => {
        state.chat = action.payload.chat
        state.chatMessages = action.payload.chat.messages
        })
      },
  });

  export const create = createAsyncThunk("chat/create", async (chat) => {
    try {
      return await chatService.create(chat);
    } catch (error) {
      console.error(error);
    }
  });

  export const writeMsg = createAsyncThunk("chat/writeMsg", async (chat) => {
    try {
      return await chatService.writeMsg(chat);
    } catch (error) {
      console.error(error);
    }
  });

  export const { addSocketMessage } = chatSlice.actions;
  export default chatSlice.reducer;
