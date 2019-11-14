import React, { useState } from "react";
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Cookies from "js-cookie";

const Login = props => {
  const [login, setLogin] = useState(null);
  const [pwd, setPwd] = useState(null);
  // const [token, setToken] = useState(null);

  console.log("props.match", props.match);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("in submit with", login, pwd);

    axios
      .post("https://livredor-api.herokuapp.com/login", {
        username: login,
        password: pwd
      })
      .then(function(response) {
        console.log("success, token = ", response.data.token);
        //setToken(response.data.token);
        props.getUser(response.data.token);
        //store token in cookie
        Cookies.set("LivredOrToken", response.data.token);
        //redirect to home
        // return <Redirect to="/Messages" />;
        window.location = "/";
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <>
      <nav>
        <Link to="/">{`<-- Go back`}</Link>
      </nav>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="login" onChange={e => setLogin(e.target.value)} />
        <input type="password" placeholder="password" onChange={e => setPwd(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
