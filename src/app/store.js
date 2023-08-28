import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import userSnowDaysSlice from "../features/userSnowDaysSlice";
import userSnowDaysReducer from "../features/userSnowDaysSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    // userSnowDays: userSnowDaysSlice,
    userSnowDays: userSnowDaysReducer,
  },
});
