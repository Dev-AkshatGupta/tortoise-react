import React from 'react'
import { createContext,useContext,useReducer } from "react";

const GamesContext=createContext();
const useGameContext=()=>useContext(GamesContext);

const GamesContextProvider = ({children}) => {
  
  function reducer(state,action){
switch (action.type) {
  case "INPUT":
    console.log(action.payload);
    return{...state,input:action.payload}

  default:
    break;
}
  }
  const [gamesState,gamesDispatch]=useReducer(reducer,{
    input:""
  })
  return (  
    <GamesContext.Provider value={{gamesState,gamesDispatch}} >      
    {children}
    </GamesContext.Provider>
  )
  }
export  {GamesContextProvider,useGameContext};
