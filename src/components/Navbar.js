import React from "react";

const Navbar = ({ showPopup, setShowPopup }) => {

  function openPopup(){

    setShowPopup(!showPopup);

  }
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://pm1.aminoapps.com/6498/3053d4a82b45b842f6660fccc67f979cb22a4e15_00.jpg"
          alt=""
        />
        <span className="user-name">Skipper</span>
        <button className="conv-btn" onClick={openPopup}>
          <img
            className="conversation-logo"
            src="https://cdn-user-icons.flaticon.com/99956/99956449/1686740347266.svg?token=exp=1686741251~hmac=62babd70ef4c7fdb37b6a2645b93711f"
            alt="addConversation"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
