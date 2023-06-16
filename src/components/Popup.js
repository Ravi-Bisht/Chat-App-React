import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

function Popup({showPopup ,setShowPopup , friends}){

    // console.log(showPopup);
    // console.log(setShowPopup);
    // console.log(friends);

    function togglePopup(){
        setShowPopup(!showPopup);
    }

    return (
      <div className="popup">
        <div className="overlay"></div>
        <div className="popup-content">
          <h1>Contacts</h1>
          {friends.map((user,index) => (
            <div className="chats" key={index}>
              <Link to={`/${user.id}`} onClick={togglePopup}>
                <div className="userChat">
                  <img src={user.picture} alt="img" />
                  <div className="userChatInfo">
                    <span>{user.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <button className="close-modal" onClick={togglePopup}>
            Close
          </button>
        </div>
      </div>
    );
}


export default Popup;