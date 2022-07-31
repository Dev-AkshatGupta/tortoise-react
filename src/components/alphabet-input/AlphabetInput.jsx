import React from "react";
import "./alphabet-input.css";
import { useGameContext } from "../../context-and-reducers/GamesContextProvider";
const AlphabetInput = () => {
  const { gamesDispatch, gamesState } = useGameContext();
  return (
    <div className="input-wrapper">
      <input
        type="text"
        onChange={(e) => {
          gamesDispatch({ type: "INPUT", payload: e.target.value });
        }}
        onKeyDown={(e) => {
          gamesDispatch({ type: "KEYUP", payload: e.key.toLowerCase() });
        }}
        value={gamesState.input}
      />
    </div>
  );
};

export default AlphabetInput;
