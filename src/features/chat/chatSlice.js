import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
  chat: null,
  chatMessages: [],
  socketMessages: [],
  chatIsError: false,
  chatIsSuccess: false,
  message: "",
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {   //SOCKET MESSAGES!
    addSocketMessage: (state, action) => {
      console.log("addSocket", action.payload)
      state.socketMessages.push(action.payload);
    },
    resetChat: (state) => {
      state.chatIsError = false;
      state.chatIsSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.fulfilled, (state, action) => {
        state.chat = action.payload.chat
        state.chatMessages = action.payload.chat.messages
      })
      .addCase(findOrCreate.fulfilled, (state, action) => {
        console.log(action.payload, " in chatSlice")
        state.chat = action.payload
        state.chatIsSuccess = true
      })
      .addCase(getChatById.fulfilled, (state, action) => {
        console.log(action.payload, "in getBY ID")
        state.chat = action.payload
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


export const findOrCreate = createAsyncThunk("chat/findOrCreate", async (otherId) => {
  try {
    console.log(otherId)
    return await chatService.findOrCreate(otherId);
  } catch (error) {
    console.error(error);
  }
});

export const getChatById = createAsyncThunk("chat/getChatById", async (chatId) => {
  try {
    return await chatService.getChatById(chatId);
  } catch (error) {
    console.error(error);
  }
});


export const { addSocketMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
