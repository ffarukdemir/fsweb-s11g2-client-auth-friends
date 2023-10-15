import { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AuthContextProvider = ({ children }) => {
  const [authUser, stAuthUser] = useLocalStorage("s11g2", {});
  const history = useHistory();
  let isLoggedIn = authUser && authUser.token;

  const authenticate = (loginInfo) => {
    axios
      .post(
        "http://localhost:9000/api/login" /*burası url*/,
        loginInfo /*bu aslında payload*/
      )
      .then((res) => {
        stAuthUser(res.data);
        history.push("/friends");
      })
      .catch((err) => console.error(err.response.message));
  };

  const logout = () => {
    axiosWithAuth()
      .get("logout")
      .catch((err) => console.error(err.response.message))
      .finally(() => {
        stAuthUser({});
        history.push("/login");
      });
  };

  return (
    <AuthContext.Provider
      value={{ authUser, authenticate, logout, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();

export default AuthContextProvider;
