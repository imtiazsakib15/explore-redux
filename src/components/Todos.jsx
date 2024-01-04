import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch]);

  return (
    <div className="py-20">
      <h1 className="text-5xl font-bold text-center">
        Todos with Redux: {todos.length}
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        {todos &&
          todos?.map((todo) => (
            <div className="bg-green-300 p-5" key={todo?.id}>
              <h5 className="text-2xl font-bold">{todo?.id}</h5>
              <p>{todo?.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todos;
