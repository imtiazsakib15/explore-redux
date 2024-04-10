import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import reduxLogger from "redux-logger";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});

export default store;
