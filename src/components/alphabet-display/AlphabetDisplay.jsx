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
  const { gamesState } = useGameContext();
  
  const [alphabets, setAlphabets] = useState([]);
// const letterToDisplay=alphabets[gamesState.input ? gamesState.input.length : 0];
const indexToDisplay = gamesState.input
  ? gamesState.keyup ===
    alphabets[gamesState.input.length - 1 ]
    ? gamesState.input.length
    : gamesState.input.length-1
  : 0;
const letterToDisplay = alphabets[indexToDisplay];
  useEffect(() => {
    const randomAlphabets = randomElements(alphabetsArr, 20);
    setAlphabets(randomAlphabets);
  }, []);

  console.log(alphabets);

  return (
    <div className="alphabet-display__wrapper">
      {letterToDisplay}
    </div>
  );
};

export default AlphabetDisplay;
