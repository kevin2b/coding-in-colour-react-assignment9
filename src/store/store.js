import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./notificationSlice.js";
import filterSlice from "./filterSlice.js";
import anecdoteSlice from "./anecdoteSlice.js";

const store = configureStore({
  reducer: {
    notification: notificationSlice,
    filter: filterSlice,
    anecdote: anecdoteSlice,
  }
});

export default store;