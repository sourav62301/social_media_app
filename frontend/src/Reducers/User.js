import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoginRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoginSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("LoginFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("RegisterRequest", (state) => {
      state.loading = true;
    })
    .addCase("RegisterSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("RegisterFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("LoadUserFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
