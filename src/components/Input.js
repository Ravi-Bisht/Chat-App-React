import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Input = ({db,setDbData}) => {

  const [value,setvalue] =useState("");
  // const [schema,setSchema] =useState("");

  const param = useParams();

  const userId= param.id;
  

  // const user = db.friends.filter((user,index)=> user.id=== parseInt(userId) );

  const user = db.friends.findIndex((user) => user.id === parseInt(userId));

  // console.log(user);



  const schema = {
    text: value,
    timestamp: Date.now(),
    side: "right",
    message_id: 5,
  };

  function sendMessage(){
    let newData = db;
    let chat = newData.friends[user].chatlog;

    chat.push(schema);
    // console.log(chat)

    setDbData({...newData});

    setvalue("");

  }

  // console.log(db)
  // console.log(setDbData);

  return (
    <div className="input">
      <input
        placeholder="Type Something ..."
        onChange={(e) => setvalue(e.target.value)}
        value={value}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Input;
