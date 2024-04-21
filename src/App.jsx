import "./App.css";
import Counter from "./components/Counter";
import Feed from "./components/Feed";
import PostCard from "./components/PostCard";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import { useGetPostByIdQuery } from "./features/api/baseApi";
import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostView";

function App() {
  const { data: post } = useGetPostByIdQuery(2);

  return (
    <>
      {/* <Counter />
      <Todos /> */}
      <CounterView />
      <Feed />
      <div className="pt-5">
        <PostCard post={post} />
      </div>
      <Posts />
      <PostView />
    </>
  );
}

export default App;
