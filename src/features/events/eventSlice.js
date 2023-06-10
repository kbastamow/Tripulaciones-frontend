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
          .addCase(getById.fulfilled, (state, action) => {
            state.event = action.payload
          })
          .addCase(joinEvent.fulfilled, (state, action) => {
            state.event = action.payload
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

export const getById = createAsyncThunk("event/getById", async(id) => {
    try {
        return await eventService.getById(id)
    } catch (error) {
        console.error(error) 
    }
})

export const joinEvent = createAsyncThunk("event/joinEvent", async(eventId) => {
    try {
        return await eventService.joinEvent(eventId)
    } catch (error) {
        console.error(error) 
    }
})

export default eventSlice.reducer