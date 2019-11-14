import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, Route, Router } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Login from "./Login";

const Messages = props => {
  const [messages, setMessages] = useState(null);
  const [messageToPost, setMessageToPost] = useState(null);

  useEffect(() => {
    axios.get(`https://livredor-api.herokuapp.com/messages`).then(res => {
      const messages = res.data;
      setMessages(messages);
    });
  });

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("in submit with", login, pwd);

    axios
      .post(
        "https://livredor-api.herokuapp.com/message",
        {
          content: messageToPost
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("LivredOrToken")
          }
        }
      )
      .then(function(response) {
        console.log("message posted with success", response);
        //reset input
        setMessageToPost(null);
        //redirect to home
        // return <Redirect to="/Messages" />;
        // window.location = "/";
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <>
      {messages !== null ? (
        <ul>
          {messages.map(msg => (
            <li key={msg.id}>{msg.content}</li>
          ))}
        </ul>
      ) : null}
      {Cookies.get("LivredOrToken") !== null ? (
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <input type="text" placeholder="message" onChange={e => setMessageToPost(e.target.value)} />
          <button type="submit">Send</button>
          Logout
        </form>
      ) : (
        <div>
          You need to <a href="/login">Login</a> to add a message
        </div>
      )}
    </>
  );
};

export default Messages;
