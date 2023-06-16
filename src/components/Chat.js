import React from "react";
import Messages from "./Messages";
import Input from "./Input";
// import { db } from "../data/data";
import { useParams } from "react-router-dom";

const Chat = ({ db, setDbData }) => {
  const param = useParams();
  const userId = parseInt(param.id);
  // console.log(userId);
  // console.log(db.friends)

  let data = db.friends;

  // data.map((user) => console.log(user.id));

  const chatUser = data.filter((user) => {
    return user.id === userId;
  });
  // console.log(chatUser);
  const [chatFriend] = chatUser;
  // console.log(chatFriend);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="contactName">
          <img src={chatFriend.picture} alt="profile" />
          <div>{chatFriend.name}</div>
        </div>
        <div className="chatIcons">
          <img
            src="https://cdn-user-icons.flaticon.com/99956/99956449/1686740300569.svg?token=exp=1686741203~hmac=7feead26e665525edda0f86740fa0c13"
            alt="videocall"
          />
          <img
            src="https://cdn-user-icons.flaticon.com/99956/99956449/1686740381621.svg?token=exp=1686741284~hmac=d1ac455cace74801ef8384efe28a688a"
            alt="more"
          />
        </div>
      </div>

      <Messages chatFriend={chatFriend} />
      <Input chatFriend={chatFriend} db={db} setDbData={setDbData} />
    </div>
  );
};

export default Chat;
