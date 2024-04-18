import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostView";

function App() {
  return (
    <>
      {/* <Counter />
      <Todos /> */}
      <Posts />
      <CounterView />
      <PostView />
    </>
  );
}

export default App;
