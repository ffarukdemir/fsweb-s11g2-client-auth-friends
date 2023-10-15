import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const initialValue = {
  username: "workintech",
  password: "wecandoit",
};

function Login() {
  const { authenticate } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(loginForm);
    setLoginForm(initialValue);
  };

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            value={loginForm.username}
            onChange={handleChange}
            name="username"
            id="username"
          ></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            value={loginForm.password}
            onChange={handleChange}
            name="password"
            id="password"
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;
