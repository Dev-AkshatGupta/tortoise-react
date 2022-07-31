import React from "react";
import "./alphabet-input.css";
import { useGameContext } from "../../context-and-reducers/GamesContextProvider";
const AlphabetInput = () => {
  const {gamesDispatch}=useGameContext();
  return <div>
    <input type="text"
    onChange={(e)=>{
      gamesDispatch({type:"INPUT",payload:e.target.value});
      // gamesDispatch({type:"KEY",payload:[...e.target.value.toLowerCase()].reverse()[0]})
    }}
    onKeyUp={(e)=>{
    gamesDispatch({type:"KEYUP",payload:e.key.toLowerCase()})
    }}
   
    
    
    />
  </div>;
};

export default AlphabetInput;
