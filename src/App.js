import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/todosSlice";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>Fetch Data</button>
      {todos.loading && "Loading..."}
      {todos.error && todos.error}
      <div>
        {todos.data.length > 0 &&
          todos.data.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <input type="checkbox" defaultChecked={todo.completed} />
            </div>
          ))}
      </div>
    </div>
  );
}
