import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, Router } from "react-router-dom";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    axios.get(`https://livredor-api.herokuapp.com/messages`).then(res => {
      const messages = res.data;
      setMessages(messages);
    });
  });
  return (
    <>
      {messages !== null ? (
        <ul>
          {messages.map(msg => (
            <li key={msg.id}>{msg.content}</li>
          ))}
        </ul>
      ) : null}
      You need to <a href="/login">Login</a> to add a message
    </>
  );
};

export default Messages;
