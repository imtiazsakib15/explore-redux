import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterView from "./features/counter/CounterView";

function App() {
  return (
    <>
      {/* <Counter />
      <Todos /> */}
      <CounterView />
    </>
  );
}

export default App;
