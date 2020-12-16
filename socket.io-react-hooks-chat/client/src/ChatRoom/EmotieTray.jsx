import React from "react";
import "./EmotieTray.css";
const EmotieTray = (props) => {

const [toggleTray, setToggleTray] = React.useState("false") //
const emoties = ["😄", "😔","😒","😐","😆", "🤨","😦","🙂"]
  return (
    <div className="tray-container">
      {emoties.map(emotie => {
       return <button className="emotie-choice">{emotie}</button>
      })}

    </div>
  )
}

export default EmotieTray;