import React, { useState } from "react";
import "./App.css";

function Room() {
  let [isLit, setLit] = useState(false);
  let [temp, setTemp] = useState(22);

  return (
    <div className={`App room ${isLit ? "lit" : "dark"}`}>
      <h1>Room is {isLit ? "lit" : "dark"}</h1>
      <h1>The current room Temperature is {temp} celsius</h1>
      <button onClick={() => setLit((isLit = true))}>On</button>
      <button onClick={() => setLit((isLit = false))}> Off</button>
      <br />
      <br />
      <button onClick={() => setTemp(++temp)}>Increase Temp</button>
      <button onClick={() => setTemp(--temp)}>Decrease Temp</button>
    </div>
  );
}

export default Room;
