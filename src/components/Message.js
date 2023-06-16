import React from "react";

const Message = ({message ,chatFriend}) => {
  // console.log(message);
  // console.log(chatFriend)
  return (
    <div className={message.side === "left" ? "messsage" : "message right"}>
      <div className="messageInfo">
        <img
          src={
            message.side === "left"
              ? `${chatFriend.picture}`
              : "https://pm1.aminoapps.com/6498/3053d4a82b45b842f6660fccc67f979cb22a4e15_00.jpg"
          }
          alt="profile"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
// className = "message right";
// src="https://pm1.aminoapps.com/6498/3053d4a82b45b842f6660fccc67f979cb22a4e15_00.jpg"