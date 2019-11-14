import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Messages from "./Messages";
import Cookies from "js-cookie";

const App = () => {
  const [token, setToken] = useState(null);

  console.log("[App] token in state =", token);
  console.log("[App] token in cookie =", Cookies.get("LivredOrToken"));

  return (
    <>
      <h2>Livre d'or</h2>
      <Router>
        <Route exact path="/" render={props => <Messages match={props.match} token={token} />} />
        {/* <Route path="/login" component={Login} /> */}
        <Route
          path="/login"
          render={props => (
            <Login
              match={props.match}
              getUser={e => {
                console.log("[App] setting user", e);
                setToken(e);
              }}
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;
