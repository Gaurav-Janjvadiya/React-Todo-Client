import { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../contexts/contexts";
import { Logout } from "../utils/utils";
import "./NavBar.css";

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(authContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/todos">Todo List</Link>
        </li>
        <li>
          <Link to="/todos/new">Add Todo</Link>
        </li>
      </ul>
      <div className="buttons">
        {!currentUser ? (
          <>
            <button className="button">
              <Link to="/login">Login</Link>
            </button>
            <button className="button">
              <Link to="/signup">SignUp</Link>
            </button>
          </>
        ) : null}
        {currentUser ? (
          <button
            className="button"
            onClick={() => {
              Logout();
              setCurrentUser(null);
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
