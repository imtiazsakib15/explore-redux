import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-4xl font-bold">Counter With Redux Toolkit</h2>
      <h4 className="text-2xl font-bold pt-4">Count = {count}</h4>
      <div className="pt-6 space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 border-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 border-2 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 border-2 rounded"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(6))}
          className="px-4 py-2 border-2 rounded"
        >
          Increment 6
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(6))}
          className="px-4 py-2 border-2 rounded"
        >
          Decrement 6
        </button>
      </div>
    </div>
  );
};

export default CounterView;
