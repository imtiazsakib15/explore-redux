import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import reduxLogger from "redux-logger";
import logger from "./middlewares/logger";
import baseApi from "../features/api/baseApi";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // getDefaultMiddleware().concat(reduxLogger),
    return getDefaultMiddleware().concat(logger).concat(baseApi.middleware);
    // getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export default store;
