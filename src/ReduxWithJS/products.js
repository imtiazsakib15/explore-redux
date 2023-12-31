import { combineReducers, createStore } from "redux";

// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART = "ADD_CART";

// product state
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// cart state
const initialCartState = {
  cart: ["salt"],
  numberOfProducts: 1,
};

// product action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// cart action
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

// product store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("abc"));
store.dispatch(addProduct("abcd"));

// cart store
// const store = createStore(cartReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(getCartItems());
store.dispatch(addCart("abc"));
store.dispatch(addCart("abcd"));
