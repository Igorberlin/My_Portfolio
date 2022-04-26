import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export default app.reducer;
export const { startLoading, stopLoading } = app.actions;
export const appSelector = (state) => state.app;
