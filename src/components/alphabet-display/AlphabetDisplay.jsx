import React, { useEffect, useState } from "react";
import "./alphabet-display.css";
import { randomElements } from "../../utils/randomElemets";
import { useGameContext } from "../../context-and-reducers/GamesContextProvider";
const AlphabetDisplay = () => {
  
  const alphabetsArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "i",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  const [alphabets, setAlphabets] = useState([]);

  useEffect(() => {
    const randomAlphabets = randomElements(alphabetsArr, 20);
    setAlphabets(randomAlphabets);
  }, []);

  console.log(alphabets);
  const { gamesState } = useGameContext();

  return (
    <div className="alphabet-display__wrapper">
      {alphabets[gamesState.input ? gamesState.input.length : 0]} 
    </div>
  );
};

export default AlphabetDisplay;
