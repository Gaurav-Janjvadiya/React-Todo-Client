import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ backgroundColor: "#303030", padding: "16px", borderRadius: "8px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="text"
          name="todo"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          style={{
            backgroundColor: "#424242",
            color: "#fff",
            padding: "8px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#616161",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;