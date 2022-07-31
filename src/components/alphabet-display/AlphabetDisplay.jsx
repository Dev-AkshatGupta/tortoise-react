import React, { useEffect, useRef, useState } from "react";
import "./alphabet-display.css";
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
  const randomAlphabets = () => {
    return alphabetsArr[Math.floor(Math.random() * alphabetsArr.length)];
  };
  const { gamesState } = useGameContext();
  const [counter, setCounter] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [time, setTime] = useState({ second: 0, minute: 0 });
  const [currentAlphabet, setCurrentAlphabet] = useState("");
  let highScoreRef = useRef(null);
  let intervalIdRef = useRef(null);

  const timeTaken = () => {
    if (miliSeconds >= 900) {
      setTime((prev) => ({ ...prev, second: prev.second + 1 }));
      setMiliSeconds((prev) => prev - 900);
    }
    if (time.second >= 59)
      setTime((prev) => ({ second: 0, minute: prev.minute + 1 }));
  };
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setMiliSeconds((prev) => prev + 100);
    }, 100);
    highScoreRef.current = JSON.parse(localStorage.getItem("highScore"));
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    timeTaken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [miliSeconds]);

  useEffect(() => {
    if (gamesState.keyup === currentAlphabet) {
      setCounter((prev) => prev + 1);

      if (counter >= 21) {
        if (highScoreRef.current?.second || highScoreRef.current?.minute) {
          if (highScoreRef.current.minute >= time.minute) {
            if (highScoreRef.current.second >= time.second) {
              setCurrentAlphabet(() => "SUCCESS");
              localStorage.setItem("highScore", JSON.stringify(time));
            } else {
              setCurrentAlphabet(() => "FAILURE");
            }
          }
        } else {
          localStorage.setItem("highScore", JSON.stringify(time));
        }
        clearInterval(intervalIdRef.current);
      } else {
        setCurrentAlphabet(() => randomAlphabets());
      }
    } else if (
      gamesState.keyup !== "backspace" ||
      gamesState.keyup !== "enter"
    ) {
      setMiliSeconds((prev) => prev + 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gamesState.input]);

  return (
    <>
      <div className="alphabet-display__wrapper">
        <span className="alphabet-display">{currentAlphabet}</span>
      </div>
      <div>
        <p className="time-wrapper">
          {highScoreRef?.current?.minute || highScoreRef?.current?.second
            ? `Highest Score:${highScoreRef?.current?.minute}:
        ${highScoreRef?.current?.second}s`
            : "For now there is no high score"}
        </p>
      </div>
      <div className="time-wrapper">
        <p className="time">
          time:
          {`${time.minute < 10 ? `0${time.minute}` : time.minute}m:${
            time.second < 10 ? `0${time.second}` : time.second
          }s:${miliSeconds}ms`}
        </p>
      </div>
    </>
  );
};

export default AlphabetDisplay;
