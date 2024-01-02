import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter())
  };
  const handleDecrement = () => {
    dispatch(decrementCounter())
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
