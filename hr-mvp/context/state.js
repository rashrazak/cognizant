//INITIAL STATE
// import * as ls from 'local-storage'
import moment from 'moment'
const initialState = {
    isLoading: false,
    uploadModal: false,
    employeeModal:false,
    employees:null,
    employee:{display:false, data:null},
    step: 0,
  }
  
  export default initialState;
  