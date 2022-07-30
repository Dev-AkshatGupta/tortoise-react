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

  const [alphabets, setAlphabets] = useState("");

  useEffect(() => {
    const randomAlphabets = randomElements(alphabetsArr, 20).join(" ");
    setAlphabets(randomAlphabets);
  }, []);
  const alphabetsSection = gamesState.input
    ? alphabets.split(" ").reduce((acc, curr, i) => {
        if (i < gamesState.input.length) return acc + curr;
        return acc;
      }, "")
    : "";
  const areAlphabetsSame = alphabetsSection === gamesState.input;
  const alphabetsToDisplay = gamesState.input
    ? areAlphabetsSame
      ? alphabets[alphabetsSection.length]
      : alphabets[alphabetsSection.length - 1]
    : alphabets[0];

  // console.log(alphabets);
  // console.log(alphabetsSection);
  console.log(areAlphabetsSame);
  console.log(alphabetsToDisplay);
  return <div className="alphabet-display__wrapper">{alphabetsToDisplay}</div>;
};

export default AlphabetDisplay;
