import React, { createContext, useContext, useReducer } from "react";

// create the place (the context) where the data layer lives
export const StateContext = createContext();

// this higher order component allows you to setup the data layer
// children is the app in app.js
// initial state is the initial state of the data
// reducer is the function that changes the state
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);
