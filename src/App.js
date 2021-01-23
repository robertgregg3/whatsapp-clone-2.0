import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import "./css/App.css";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(
    () => [
      axios.get("/messages/sync").then((response) => {
        setMessages(response.data);
      }),
    ],
    []
  );
  console.log(messages);

  useEffect(() => {
    const pusher = new Pusher("fd63c2a6a3729ad1a8a0", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
