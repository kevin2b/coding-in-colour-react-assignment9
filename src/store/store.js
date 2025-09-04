import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./notificationSlice.js";
import filterSlice from "./filterSlice.js"

const store = configureStore({
  reducer: {
    notification: notificationSlice,
    filter: filterSlice,
  }
});

export default store;