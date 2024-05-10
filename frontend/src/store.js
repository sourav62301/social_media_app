import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/User";

// const initialState = {};

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
