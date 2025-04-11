import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import sidebarReducer from "./sidebarSlice"

export const store = configureStore({
  reducer: {
    user: userReducer, // Register the user reducer
    sidebar: sidebarReducer,
  },
});

// Define RootState and AppDispatch types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;