import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
  const handelUserNameChange = (event) => {
    setUserName(event.target.value)
    window.localStorage.userName = userName;
    console.log('localStorage', localStorage)
  }

  return (
    <div className="home-container">
      <input
      type="text"
      placeholder="userName"
      value={userName}
      onChange={handelUserNameChange}
      className="text-input-field"
      />
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;
/**
 * user should be able to enter a nickname
 *
 */