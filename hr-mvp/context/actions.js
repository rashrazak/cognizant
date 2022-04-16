import {
    IS_LOADING,
    SET_DATA,
    RESET_DATA,
    SET_STEP,
    REMOVE_DATA,
    SET_DIALOG,
  } from "./types";
  
  
  export const useActions = (state, dispatch) => {
    const actions =  {
      setLoading:  (data) => {
        dispatch({ type: IS_LOADING, data });
      },
      setStep: (data) => {
        dispatch({ type: SET_STEP, data });
      },
      setData: (data, name) => {
        dispatch({ type: SET_DATA, data, name });
      },
      removeData: (name) => {
        dispatch({ type: REMOVE_DATA, name });
      },
      resetData: () => {
        dispatch({ type: RESET_DATA });
      },
      setDialog: (data) => {
        dispatch({ type: SET_DIALOG, data});
      },
      
    }
    return actions
  };
  