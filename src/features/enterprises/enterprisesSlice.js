import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enterprisesService from "./enterprisesService";

const initialState = {
    enterprises: []
};
export const getAll = createAsyncThunk("enterprises/getAll", async () => {
    try {
        return await enterprisesService.getAll();
    } catch (error) {
        console.error(error);
    }
});
export const enterprisesSlice = createSlice({
    name: "enterprises",
    initialState,
    reducers: {   resetEnterprise: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.enterprises = action.payload;
            })
    },
});

export const { resetEnterprise } = enterprisesSlice.actions;
export default enterprisesSlice.reducer;