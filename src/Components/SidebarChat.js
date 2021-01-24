import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "../css/SidebarChat.css";

export const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  const createChat = () => {
    const roomName = prompt("What is the name for this chat?");

    if (roomName) {
      //clever database stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message posted</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};
