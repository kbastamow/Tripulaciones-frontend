import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService";


const initialState = {
    events: [],
    event:{},
    isError: false,
    isSuccess: false,
    message: "",
}

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        resetEvent: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },},
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
            state.event = action.payload.event  //IMPORTANT! OTHERWISE STATE UPDATES
            // } else {
            //     state.event = state.event
            //     state.isError = true;
            //     console.log(action.payload)
            //     // state.message = action.payload.msg;
            }
          })
          .addCase(joinEvent.rejected, (state, action) => {
            console.log("Action.payload", action.payload)
            if (action.payload.status === 400) {
                state.isError = true;
                state.message = action.payload.data
            } else //Not finished!
            console.log("Event slice", action.payload)

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

export const joinEvent = createAsyncThunk("event/joinEvent", async(eventId, thunkAPI) => {
    try {
        const res =  await eventService.joinEvent(eventId)
        console.log(res)
    } catch (error) {
        console.log("In Slice,", error)
        console.log("In Slice,", error.response.data)
        const { status, data } = error.response; //If I want to return more than one value
        const serializedPayload = { status, data };

        return thunkAPI.rejectWithValue(serializedPayload);
      }    
})

export const { resetEvent } = eventSlice.actions;
export default eventSlice.reducer