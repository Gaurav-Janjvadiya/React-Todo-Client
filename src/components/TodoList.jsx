import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <ul className="todosParent">
      {todos.map((todo, i) => (
        <li className="todo" key={i}>
          {todo.todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
