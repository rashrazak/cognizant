import {
    IS_LOADING,
    SET_DATA,
    RESET_DATA,
    SET_STEP,
    REMOVE_DATA,
    SET_DIALOG,
  } from "./types";
  import * as FormData from 'form-data'
  
  
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

      uploadImages: ( files) =>{

        let form = new FormData()
        for (let index = 0; index < files.length; index++) {
          if (file[index].size >= 2000000) {
            alert("This file is more than 2MB")
            continue;
          }
          form.append(`csv[${index}]`, files[index])
        }

        if (files) {
          return await axios({
            method:'post',
            url:`https://nphc-hr.free.beeceptor.com/employees/upload`,
            data:form,
            headers:{
                'Content-Type': 'multipart/form-data',
                'Accept' : 'application/json',
            },
            validateStatus:function(status){
                return status >= 200 && status <= 300 || status === 400
            }
        })   
        }
            
    },
      
    }
    return actions
  };
  