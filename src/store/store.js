import { combineReducers, configureStore } from "@reduxjs/toolkit";
import radio from "./radio";
import app from "./app";

const rootReducer = combineReducers({
  radio,
  app
});

const store = configureStore({ reducer: rootReducer });
export default store;
