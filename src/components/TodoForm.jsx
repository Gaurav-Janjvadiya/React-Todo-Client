// TodoForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css'; // Import the CSS file

function TodoForm({
  onSubmit,
  placeholder = "Enter todo",
  buttonText = "Add",
}) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue(""); // Clear input after submit
      navigate("/todos");
    }
  };

  return (
    <div className="todo-form-container">
      <form
        onSubmit={handleSubmit}
        className="todo-form"
      >
        <input
          type="text"
          name="todo"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="todo-input"
        />
        <button
          type="submit"
          className="todo-button"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;