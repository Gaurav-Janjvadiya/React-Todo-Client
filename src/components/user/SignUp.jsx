import { useState, useContext } from "react";
import authContext from "../../contexts/contexts";
import "./Login.css";

function SignUp({ onSubmit }) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const { setCurrentUser } = useContext(authContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const User = await onSubmit(user);
    setCurrentUser(User);
    setUser({ username: "", email: "", password: "" });
  };

  return (
    <div className="parent">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            value={user.username}
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <br />
          <input
            value={user.email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <br />
          <input
            value={user.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
