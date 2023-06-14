import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import groupService from "./groupService";

const initialState = {
    groups: []
}

export const getAllGroups = createAsyncThunk("group/getAll", async() => {
    try {
    return await groupService.getAllGroups()
    } catch (error) {
    console.error(error)  
    }
})

export const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(getAllGroups.fulfilled, (state, action) => {
            state.groups = action.payload
        })
    }
})





export default groupSlice.reducer