import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import eventService from "./eventService";


const initialState = {
    events: [],
    event:{},
    isError: false,
    isSuccess: false,
    message: "",
    idArray: [],
    recommendedEvents: []
}

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        resetEvent: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },
      filterByRecommendation: (state) => {
          if (state.events < 1 || state.idArray < 1) {
            return
          }
          const sortedEvents = state.events.slice().sort((a, b) => {
          const indexA = state.idArray.indexOf(a._id);
          const indexB = state.idArray.indexOf(b._id);
          return indexA - indexB;
        });
        state.events = sortedEvents
        },
       filterByDate: (state) => {
        const sortedEvents = state.events.slice().sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
          });
        state.events = sortedEvents  
       }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getAll.fulfilled, (state, action) => {
          state.events = action.payload
          })
          .addCase(getById.fulfilled, (state, action) => {
            state.event = action.payload
          })
          .addCase(getRecommendations.fulfilled, (state, action) => {
            state.idArray  = action.payload
          })
          .addCase(joinEvent.fulfilled, (state, action) => {
            if (action.payload) {
            state.event = action.payload.event  //IMPORTANT! OTHERWISE STATE UPDATES
            }
          })
          .addCase(joinEvent.rejected, (state, action) => {
            if (action.payload.status === 400) {
                state.isError = true;
                state.message = action.payload.data
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
       
        return await eventService.getById(id)
    } catch (error) {
        console.error(error) 
    }
})

export const getRecommendations = createAsyncThunk("event/getRecommendations", async() => {
    try {
        console.log("get Recommendations")
        return await eventService.getRecommendations()
    } catch (error) {
        console.error(error) 
    }
})

export const joinEvent = createAsyncThunk("event/joinEvent", async(eventId, thunkAPI) => {
    try {
        return await eventService.joinEvent(eventId)
      
    } catch (error) {
        const { status, data } = error.response; //If I want to return more than one value
        const serializedPayload = { status, data };

        return thunkAPI.rejectWithValue(serializedPayload);
      }    
})





export const { resetEvent,  filterByRecommendation, filterByDate } = eventSlice.actions;
export default eventSlice.reducer