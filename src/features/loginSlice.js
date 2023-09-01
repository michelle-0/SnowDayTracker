import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for logging in
export const loginSlice = createAsyncThunk("auth/loginSlice", async (credentials) => {
  const response = await fetch("your-auth-api-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSlice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const {} = authSlice.actions;
