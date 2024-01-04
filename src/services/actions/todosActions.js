import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  TODOS_API_URL,
} from "../constant/todosConstants";

export const getAllTodos = async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const res = await axios.get(TODOS_API_URL);
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};
