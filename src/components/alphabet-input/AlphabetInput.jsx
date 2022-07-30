import React from "react";
import "./alphabet-input.css";
import { useGameContext } from "../../context-and-reducers/GamesContextProvider";
const AlphabetInput = () => {
  const {gamesDispatch}=useGameContext();
  return <div>
    <input type="text"
    onChange={(e)=>{
      gamesDispatch({type:"INPUT",payload:e.target.value})
      console.log(e.target.value);
    }}
    />
  </div>;
};

export default AlphabetInput;
