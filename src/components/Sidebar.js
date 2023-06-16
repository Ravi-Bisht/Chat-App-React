import React from "react";
import Navbar from "./Navbar";
// import Search from "./Search";
import Chats from "./Chats";
// import { db } from "../data/data";
import { useState } from "react";
import Popup from "./Popup";

const Sidebar = ({db}) => {

  const [showPopup , setShowPopup] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  // const [searchValuePresent , setSearchValuePresent] = useState(false);

  let data = db.friends;

  function onSearch(searchTerm) {
    // console.log(searchTerm);
  }
  // console.log(data)
  return (
    <div className="sidebar">
      <Navbar showPopup={showPopup} setShowPopup={setShowPopup} />
      {showPopup && (
        <Popup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          friends={db.friends}
        />
      )}

      {/* search bar  */}

      <div className="search">
        <div className="searchForm">
          <input
            type="text"
            placeholder="Find a User"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <button className="searchBtn" onClick={() => onSearch(searchValue)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
            alt="search"
          />
        </button>
      </div>

      {/* if the search value is not empty we will show only users with that names */}

      {data.filter(user => {
        const searchTerm = searchValue.toLowerCase();
        const name = user.name.toLowerCase();

        return searchTerm && name.startsWith(searchTerm);
      })
      .map((user) => {
        return <Chats key={user.id} user={user} />;
      })}



      {/* if the search value is empty we will show alll the users  */}

      {searchValue === "" &&
        data.map((user) => {
          return <Chats key={user.id} user={user} />;
        })}
    </div>
  );
};

export default Sidebar;