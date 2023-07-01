import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
