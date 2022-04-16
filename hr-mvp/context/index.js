import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducers";
import initialState from "./state";
import { useActions } from "./actions";

const HRMVPContext = createContext(initialState);

const HRMVPProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") console.log({ newState: state })
  }, [state]);
  
  return (
    <HRMVP.Provider value={{ state, dispatch, actions }}>
      {children}
    </HRMVP.Provider>
  );
}

export { 
    HRMVPProvider as default,
    HRMVPContext
};