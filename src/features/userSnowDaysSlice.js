import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserSnowDays = createAsyncThunk(
  "userSnowDays/fetchUserSnowDays",
  async (userEmail) => {
    const apiUrl = `https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/snowdays/mo@gmail.com`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  }
);

export const userSnowDaysSlice = createSlice({
  name: "userSnowDays",
  initialState: {
    value: [],
  },
  reducers: {
    setUserSnowDays: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserSnowDays.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { setUserSnowDays } = userSnowDaysSlice.actions;

export default userSnowDaysSlice.reducer;
