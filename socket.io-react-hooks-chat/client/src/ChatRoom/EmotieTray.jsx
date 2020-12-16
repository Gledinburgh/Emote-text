import React from "react";
import "./EmotieTray.css";
const EmotieTray = (props) => {

const emoties = ["😄", "😔","😒","😐","😆", "🤨","😦","🙂"];

const trayElement = React.useRef("null")
const handleEmotieSelect = (emotieId) => {
  props.setNewEmote(emoties[emotieId])
}

React.useEffect(() => {
  if (props.toggleEmotieTray) {
    trayElement.current.style.display = 'block';
  } else {
    trayElement.current.style.display = 'none';
  }
})


  return (
    <div ref={trayElement} className="tray-container">
      {emoties.map((emotie, i) => {
       return <button
        key ={i}
        className="emotie-choice"
        onClick={() => handleEmotieSelect(i)}
        >
          {emotie}
        </button>
      })}

    </div>
  )
}

export default EmotieTray;