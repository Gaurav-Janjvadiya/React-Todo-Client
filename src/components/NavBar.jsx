import { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../contexts/contexts";
import { Logout } from "../utils/utils";

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(authContext);

  return (
    <nav
      style={{
        backgroundColor: "#303030",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid #424242",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          gap: "16px",
        }}
      >
        <li>
          <Link
            to="/todos"
            style={{ color: "#fff", textDecoration: "none", fontSize: "16px" }}
          >
            Todo List
          </Link>
        </li>
        <li>
          <Link
            to="/todos/new"
            style={{ color: "#fff", textDecoration: "none", fontSize: "16px" }}
          >
            Add Todo
          </Link>
        </li>
        {!currentUser ? (
          <>
            <li>
              <Link
                to="/login"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                SignUp
              </Link>
            </li>
          </>
        ) : null}
        {currentUser ? (
          <li
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
            }}
            onClick={() => {
              Logout();
              setCurrentUser(null);
            }}
          >
            Logout
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
