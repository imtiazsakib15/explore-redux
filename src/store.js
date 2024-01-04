import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer";
import todosReducer from "./services/reducers/todosReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ counterReducer, todosReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
