import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
    events: [],
    event:{}
}


export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getAll.fulfilled, (state, action) => {
          state.events = action.payload
           
          })
      },
    
})


export const getAll = createAsyncThunk("event/getAll", async() => {
    try {
        return await eventService.getAll()
    } catch(error) {
        console.error(error)
    }
})

export default eventSlice.reducer