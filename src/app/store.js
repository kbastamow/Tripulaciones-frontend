import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import events from "../features/events/eventSlice"
import user from "../features/users/userSlice"
import program from "../features/program/programSlice"
import enterprises from "../features/enterprises/enterprisesSlice"


export const store = configureStore({
  reducer: {
    auth, 
    events,
    user,
    program,
    enterprises
  
  },
})