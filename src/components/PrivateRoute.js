import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
