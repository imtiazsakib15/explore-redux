import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import reduxLogger from "redux-logger";
import logger from "./middlewares/logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(reduxLogger),
    getDefaultMiddleware().concat(logger),
});

export default store;
