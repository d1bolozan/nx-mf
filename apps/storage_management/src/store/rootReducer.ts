import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import appReducer from "./appSlice";

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
