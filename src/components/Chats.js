import React from "react";
import { Link } from "react-router-dom";

const Chats = ({user}) => {
  // console.log(user);
  return (
    <div className="chats">
      <Link to={`/${user.id}`}>
        <div className="userChat">
          <img src={user.picture} alt="img" />
          <div className="userChatInfo">
            <span>{user.name}</span>
            <p>{user.chatlog[user.chatlog.length - 1].text}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Chats;
