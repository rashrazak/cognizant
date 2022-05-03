import React, {useState, useContext, useEffect} from 'react'
import Main from './Main'
import { HRMVPContext } from '../../context'
import firebase from '../../utils/firebase'
function EditEmployee() {

    const {state, actions} = useContext(HRMVPContext)
    const { employee} = state
    const {setData, setLoading, findEmployeeValue,} = actions

    const setClose = () =>{
        setData({employee:{display:false, data:null}})
    }

    const saveData = () =>{
        firebase.updateEmployee(employee.data)
    }

    return (
        <>
        {
            employee.display &&  
            <Main title='Update Employee' setClose={setClose}>
                <div> 
                    <div className=''>
                        <div className='flex flex-col'>
                            <label>Full Name</label>
                            <input className='w-full border-2 p-2 mb-2' type={'text'} value={employee.data.fullName} 
                            onChange={e=>setData({employee:{...employee,data:{...employee.data, fullName:e.target.value}}})} />
                            <label>Login Id</label>
                            <input className='w-full border-2 p-2 mb-2' type={'text'} value={employee.data.loginId} 
                            onChange={e=>setData({employee:{...employee,data:{...employee.data, loginId:e.target.value}}})} />
                            <label>Salary</label>
                            <input className='w-full border-2 p-2 mb-2' type={'number'} value={employee.data.salary} 
                            onChange={e=>setData({employee:{...employee,data:{...employee.data, salary:e.target.value}}})} />
                        </div>
                      
                    </div>
                    <div className='mt-7 float-right'>
                        <button className={`py-3 relative border-2 p-4`} onClick={saveData}>Save </button>
                    </div>
                </div>
            </Main>
        }
        </>
       
    )
}

export default EditEmployee