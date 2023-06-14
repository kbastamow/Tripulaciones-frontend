import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import events from "../features/events/eventSlice"
import user from "../features/users/userSlice"
import program from "../features/program/programSlice"
import enterprises from "../features/enterprises/enterprisesSlice"
import group from "../features/group/groupSlice"

import chat from "../features/chat/chatSlice"

export const store = configureStore({
  reducer: {
    auth, 
    events,
    user,
    program,
    enterprises,
    chat,
    group,
  },
})