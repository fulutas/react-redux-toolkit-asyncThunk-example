import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../redux/todosSlice";

export default configureStore({
  reducer: {
    todos: todosSlice
  }
});
