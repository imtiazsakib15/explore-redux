import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// State
const initialCounterState = { count: 0 };
const initialUsersState = { users: [{ name: "Sakib" }] };

// Action ---> {type, payload}

const incrementCounter = () => {
  return { type: INCREMENT };
};

const decrementCounter = () => {
  return { type: DECREMENT };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "abcde" },
  };
};

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

/**
 * 1. state
 * 2. dispatch action
 * 3. reducer
 * 4. store ---> getStore(), dispatch(), subscribe()
 */
