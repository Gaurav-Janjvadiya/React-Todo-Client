import { useState } from "react";
import authContext from "./contexts";

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <authContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
