import React from "react";
import { Avatar } from "@material-ui/core";
import "../css/SidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message posted</p>
      </div>
    </div>
  );
};
