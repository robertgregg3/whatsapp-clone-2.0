import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "../css/SidebarChat.css";

export const SidebarChat = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message posted</p>
      </div>
    </div>
  );
};
