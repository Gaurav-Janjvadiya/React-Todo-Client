import { useContext } from "react";
import TodoItem from "./TodoItem";
import authContext from "../contexts/contexts";

function TodoList({ todos }) {
  const { currentUser, setCurrentUser } = useContext(authContext);
  return (
    <div
      style={{
        width: "80vw",
        backgroundColor: "#303030",
        padding: "16px",
        borderRadius: "8px",
        color: "#fff",
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, i) => (
          <li
            key={i}
            style={{ padding: "1px", borderBottom: "1px solid #424242" }}
          >
            <TodoItem text={todo.todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
