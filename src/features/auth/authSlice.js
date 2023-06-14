import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user ? user : null,
  token: token ? token : "",
  isError: false,
  isSuccess: false,
  message: "",
  loginIsError: false

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload)
        if (action.payload === "Usuario o contraseña incorrecto") {
        state.isError = true;
        state.message = action.payload
        }
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;       
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    const message = error.response.data.errors[0].message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const login = createAsyncThunk("auth/login", async (user,thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
    console.log(error.response.data.msg[0])
    const message = error.response.data.msg;
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});


export const updateProfile = createAsyncThunk("auth/updateProfile", async (user) => {
  try {
      return await authService.updateProfile(user);
  } catch (error) {
      console.error(error);
  }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer
