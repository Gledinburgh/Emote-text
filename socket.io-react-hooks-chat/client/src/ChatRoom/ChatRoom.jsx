import React from "react";

import EmotieTray from "./EmotieTray"
import "./ChatRoom.css";
import useChat from "../useChat";

const ChatRoom = (props) => {

  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
  const [newEmotie, setNewEmote] = React.useState("😐");
  const [toggleEmotieTray, setToggleEmotieTray] = React.useState(false)


  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage, newEmotie);
    setNewMessage("");
  };

  const handleEmotieTrayToggle = () => {

    setToggleEmotieTray(!toggleEmotieTray)
  }
  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <div>
              <div  className={`emotie-item ${
                message.ownedByCurrentUser ? "my-emotie" : "received-emotie"
              }`}
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
      <button className="emotie-select" onClick={() => handleEmotieTrayToggle() }>☺</button>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      > </textarea>
      </div>
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;