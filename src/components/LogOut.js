import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>Logging out in progres...</div>;
}

export default Logout;
