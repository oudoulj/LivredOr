import React, { useState } from "react";
import { BrowserRouter as Link, Redirect } from "react-router-dom";
import "./App.css";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState();
  const [pwd, setPwd] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("in submit with", login, pwd);

    axios
      .post("https://livredor-api.herokuapp.com/login", {
        username: login,
        password: pwd
      })
      .then(function(response) {
        console.log("success", response);
        //redirect to home
        //return <Redirect to="/Messages" />;
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
