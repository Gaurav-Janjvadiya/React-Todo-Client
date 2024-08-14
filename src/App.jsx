import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/NavBar";
import SignUp from "./components/user/SignUp"
import Login from "./components/user/Login";
import { registerUser, LoginUser } from "./utils/utils";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://tasknode-api.onrender.com/todos")
      .then((res) => setTodos(res.data))
      .catch((e) => console.log(e));
  }, [todos]);

  const postTodo = (newTodo) => {
    let data = { todo: newTodo };
    axios
      .post("https://tasknode-api.onrender.com/todos", data)
      .then((res) => setTodos([...todos, res.data.todo]))
      .catch((e) => console.log(e));
  };

  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/todos" element={<TodoList todos={todos} />} />
          <Route path="/todos/new" element={<TodoForm onSubmit={postTodo} />} />
          <Route path="/signup" element={<SignUp onSubmit={registerUser} />} />
          <Route path="/login" element={<Login onsubmit={LoginUser} />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
