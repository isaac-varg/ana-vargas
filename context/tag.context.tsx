"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  selectedHomepageTag: string;
};

type ActionType = {
  type: string;
  payload: string;
};

const initialState: StateType = {
  selectedHomepageTag: "All",
};


const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "setHomepageTag": {
            return { ...state, selectedHomepageTag: action.payload}
        }
        default:
            return state;
    }
}

export const TagContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
  }>({ state: initialState, dispatch: () => null });


  export const TagContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <TagContext.Provider value={{ state, dispatch }}>
        {children}
      </TagContext.Provider>
    );
  };