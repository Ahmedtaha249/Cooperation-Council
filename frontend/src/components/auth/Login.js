import React, { useState, useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../App";
import "../auth/Login.css"



const Login = () => {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const newUser = useContext(userContext);
  const [err, setErr] = useState();
  return (
    <div className="login">
      <h2 className="header-login">login</h2>
      <input
        type="email"
        placeholder="email here"
        className="email-login"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password here"
        className="password-login"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
      className="btn-login"
        onClick={() => {
          axios
            .post("http://localhost:5000/login", { email, password })
            .then((result) => {
              if (!result.data.token) {
                setErr(result.data);
              } else {
                console.log(result);
                console.log(result.data.token);
                newUser.setToken(result.data.token);
                history.push(`${path}/home`);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        login
      </button>
      {err}
    </div>
  );
};

export default Login;
