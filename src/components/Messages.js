import React from "react";
import Message from "./Message";

const Messages = ({chatFriend}) => {
  // console.log(chatFriend.chatlog);
  return (
    <div className="messages">
      {chatFriend.chatlog.map((message,index) => (
        <Message
          message={message}
          chatFriend={chatFriend}
          key={index}
        />
      ))}
    </div>
  );
};

export default Messages;
