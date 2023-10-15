import "./App.css";
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AuthContextProvider from "./contexts/AuthContext";
import AddFriend from "./components/AddFriend";
import Header from "./components/Header";
import Logout from "./components/LogOut";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/friends">
            <FriendList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends/add">
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute path="/logout">
            <Logout />
          </PrivateRoute>
          <PrivateRoute path="/friends/:id">
            <Friend />
          </PrivateRoute>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
