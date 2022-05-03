import {
    IS_LOADING,
    SET_DATA,
    RESET_DATA,
    SET_STEP,
    REMOVE_DATA,
    SET_DIALOG,
  } from "./types";
  // import * as FormData from 'form-data'
  import firebase from "../utils/firebase";
  
  
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

      findEmployeeValue: async () =>{
        let employees = []
        let x = await firebase.getEmployees()
        await x.forEach(function(doc) {
          let x = doc.id;
          let y = doc.data()
          console.log(y)
          let data = {...y, idFirebase:x}
          employees = [...employees, data]
        })

        // employees.sort((a,b)=>{
        //   return a.salary - b.salary
        // })
        actions.setData({employees, displayEmployees: employees})
      },

      deleteEmployee:(id) =>{
        firebase.deleting(id)
      }
      
    }
    return actions
  };
  