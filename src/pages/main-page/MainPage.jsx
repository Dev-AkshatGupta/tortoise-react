import React from 'react';
import "./main-page.css";
import AlphabetDisplay from "./../../components/alphabet-display/AlphabetDisplay";
import AlphabetInput from '../../components/alphabet-input/AlphabetInput';
const MainPage = () => {

  return (
    <div className="main-hero__wrapper">
      <h1 className="align-center"> Type the Alphabet</h1>
      <p className="align-center">
        Typing game to test how fast you can type. Time starts when you do it.
        :)
      </p>
      <div className='alphabet-display__hero'>
        <AlphabetDisplay />
      </div>
      <AlphabetInput />
    </div>
  );
}

export default MainPage
