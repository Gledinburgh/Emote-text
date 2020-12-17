import React from "react";

import EmotieTray from "./EmotieTray"
import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props) => {

  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
  const [newEmotie, setNewEmote] = React.useState("😐");
  const [toggleEmotieTray, setToggleEmotieTray] = React.useState(false);
  const [visiter, setVisiter] = React.useState('visiter')
  const userName = window.localStorage.userName;



  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, newEmotie, userName);
    setNewMessage("");
  };

  const handleEmotieTrayToggle = () => {
    setToggleEmotieTray(!toggleEmotieTray)
  }
  const handleVisiter = (visiter) => {
    setVisiter(visiter);
  }
  React.useEffect (()=> {
    if (visiter === 'visiter') {
      messages.forEach(message => {
        if (!message.ownedByCurrentUser) {
          handleVisiter(message.userName)
        }
      })


    }
  })

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <h1 className="room-name">Visiter: {visiter}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (

            <div>
              <div
                className={`emotie-item ${message.ownedByCurrentUser ? "my-emotie" : "received-emotie"}`}
                >
                {message.emotie}

                </div>
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
            </div>
          ))}
        </ol>
      </div>
      <div>
      <EmotieTray setNewEmote={setNewEmote} toggleEmotieTray={toggleEmotieTray}/>
      <div className="input-container">
      <button className="emotie-select" onClick={() => handleEmotieTrayToggle() }>☺</button>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      > </textarea>

      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
      </div>
      </div>
    </div>
  );
};

export default ChatRoom;