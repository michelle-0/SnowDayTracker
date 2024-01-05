import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import userSnowDaysReducer from "../features/userSnowDaysSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    // userSnowDays: userSnowDaysSlice,
    userSnowDays: userSnowDaysReducer,
  },
});