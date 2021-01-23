import React, { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import "./css/App.css";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("fd63c2a6a3729ad1a8a0", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
