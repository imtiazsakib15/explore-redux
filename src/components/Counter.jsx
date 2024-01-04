import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Counter with Redux</h1>
      <h5 className="text-2xl font-bold pt-5">{count}</h5>
      <button
        className="px-4 py-2 border-2 border-green-700 m-4"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 border-2 border-green-700 m-4"
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        className="px-4 py-2 border-2 border-green-700 m-4"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

/**
 * 1. state    -> { count : 0 }
 * 2. actions  -> increment / decrement / reset
 * 3. reducers -> increment -> count => count + 1
 *             -> decrement -> count => count - 1
 *             -> reset     -> count => 0
 * 4. store
 * 5. providing store in react
 * 6. use store
 */
