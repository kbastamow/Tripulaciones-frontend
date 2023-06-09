import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import events from "../features/events/eventSlice"
import program from "../features/program/programSlice"


export const store = configureStore({
  reducer: {
    auth, 
    events,
    program 
  
  },
})