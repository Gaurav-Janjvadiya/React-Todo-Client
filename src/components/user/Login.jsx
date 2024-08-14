import React from "react";
import { useState, useContext, useEffect } from "react";
import authContext from "../../contexts/contexts";

function Login({ onsubmit }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setCurrentUser } = useContext(authContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const User = await onsubmit(user);
    setCurrentUser(User);
    setUser({ username: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
        />
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
