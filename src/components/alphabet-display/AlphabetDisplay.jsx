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
  const [display, setDisplay] = useState("");
  useEffect(() => {
    const randomAlphabets = randomElements(alphabetsArr, 20).join(" ");
    setAlphabets(randomAlphabets);
  }, []);
  let alphabetsSection = gamesState.input
    ? alphabets.split(" ").reduce((acc, curr, i) => {
        if (i < gamesState.input.length) return acc + curr;
        return acc;
      }, "")
    : "";
  let areAlphabetsSame = alphabetsSection === gamesState.input;
  let alphabetsToDisplay = gamesState.input
    ? areAlphabetsSame
      ? alphabets[alphabetsSection.length]
      : alphabets[alphabetsSection.length - 1]
    : alphabets[0];
  // let alphabetsToDisplay = () => {
  //   if (gamesState.input) {
  //     if (areAlphabetsSame) {
  //       console.log({ answer: alphabets[alphabetsSection.length] });
  //       console.log(alphabetsSection.length);
  //       console.log(alphabets);
  //       return alphabets[alphabetsSection.length];
  //     } else {
  //       return alphabets[alphabetsSection.length - 1];
  //     }
  //   } else {
  //     console.log(alphabets[0]);
  //     return alphabets[0];
  //   }
  // };
  useEffect(() => {
    setDisplay(alphabetsToDisplay);
  }, [gamesState.input]);
  console.log({ alphabets });
  console.log(gamesState.input);
  console.log({ alphabetsSection });
  console.log({ areAlphabetsSame });
  console.log({ alphabetsToDisplay: alphabetsToDisplay });
  return (
    <div className="alphabet-display__wrapper">
      {/* {alphabetsToDisplay()} */}
      {display}
    </div>
  );
};

export default AlphabetDisplay;
