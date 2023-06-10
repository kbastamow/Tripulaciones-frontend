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
            if (action.payload) {
            state.event = action.payload  //IMPORTANT! OTHERWISE STATE UPDATES
            } else {
                state.event = state.event
            }
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
        console.log("getbyId")
        return await eventService.getById(id)
    } catch (error) {
        console.error(error) 
    }
})

export const joinEvent = createAsyncThunk("event/joinEvent", async(eventId) => {
    try {
        return await eventService.joinEvent(eventId)
    } catch (error) {
        const message = error.response.data.errors[0].message;
        return thunkAPI.rejectWithValue(message);
      }
  
        
 
        
})

export default eventSlice.reducer