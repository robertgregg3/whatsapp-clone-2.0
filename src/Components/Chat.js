import React, { useState } from "react";
import "../css/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "axios";

const Chat = ({ messages }) => {
  const [text, setText] = useState("");

  const sendMessage = (e) => {
    e.prevemtDefault();

    axios.post("/new/message", {
      message: text,
      name: "Rob",
      timestamp: "Just now",
      received: false,
    });
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((m) => (
          <p
            className={`chat__message ${!m.received && "chat__receiver"}`}
            key={m._id}>
            <span className="chat__name">{m.name}</span>
            <span>{m.message}</span>
            <span className="chat__timestamp">{m.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onSubmit={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
