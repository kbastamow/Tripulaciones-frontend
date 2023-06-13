import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
  chat: null,
  chatMessages: [],
  socketMessages: [],
  myChats: [],
  chatIsError: false,
  chatIsSuccess: false,
  message: "",
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {   //SOCKET MESSAGES!
    addSocketMessage: (state, action) => {
      state.socketMessages.push(action.payload);
    },
    resetChat: (state) => {
      console.log("Reset")
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
        console.log(action.payload.chat, "in ChatDetails")
        state.chat = action.payload.chat
        state.chatIsSuccess = true
      })
      .addCase(getChatById.fulfilled, (state, action) => {
        state.chat = action.payload
      })
      .addCase(getChatsByUserId.fulfilled, (state, action) => {
        state.myChats = action.payload
      })
  },
});

export const findOrCreate = createAsyncThunk("chat/findOrCreate", async (otherId) => {
  try {
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

export const getChatsByUserId = createAsyncThunk("chat/getChatsByUserId", async() =>{
try {
  return await chatService.getChatsByUserId();
} catch (error) {
  console.error(error);
}
});


//NOT CURRENTLY IN USE:
export const create = createAsyncThunk("chat/create", async (chat) => {
  try {
    return await chatService.create(chat);
  } catch (error) {
    console.error(error);
  }
});
//NOT CURRENTLY IN USE:
export const writeMsg = createAsyncThunk("chat/writeMsg", async (chat) => {
  try {
    return await chatService.writeMsg(chat);
  } catch (error) {
    console.error(error);
  }
});



export const { addSocketMessage, resetChat } = chatSlice.actions;
export default chatSlice.reducer;
