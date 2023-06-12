import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import programService from "./programService";

const initialState = {
    programs: []
}

export const programSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.programs = action.payload
        })
    }
})




export const getAll = createAsyncThunk("program/getAll", async() => {
    try {
    return await programService.getAll()
    } catch (error) {
    console.error(error)  
    }
})



export default programSlice.reducer