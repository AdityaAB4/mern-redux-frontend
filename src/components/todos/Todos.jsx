import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";

const Todos = () => {
  const auth = useSelector((state) => state.auth);
  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) return <Navigate to="/signin" />;

  return (
    <div>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </div>
  );
};

export default Todos;
