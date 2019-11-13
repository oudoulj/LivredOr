import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Messages from "./Messages";

const App = () => {
  const [messages, setMessages] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://livredor-api.herokuapp.com/messages`).then(res => {
  //     const messages = res.data;
  //     setMessages(messages);
  //   });
  // });
  return (
    <>
      <h2>Livre d'or</h2>
      <Router>
        <Route exact path="/" component={Messages} />
        <Route path="/login" component={Login} />
      </Router>
    </>
  );
};

export default App;
