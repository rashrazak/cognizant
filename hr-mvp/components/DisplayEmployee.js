import React, {useState, useEffect, useContext} from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { HRMVPContext } from '../context'


function DisplayEmployee() {
    const {state, actions} = useContext(HRMVPContext)
    const {uploadModal, displayEmployees} = state
    const {setData, setLoading, findEmployeeValue, deleteEmployee} = actions

    useEffect(() => {
     if (!displayEmployees) {
        findEmployeeValue()
     }
    }, [displayEmployees])
    
    const deleteMe = (id) =>{
        if (window.confirm("Are you sure to delete?")) {
            deleteEmployee(id)
        }
    }

    const editMe = (v) =>{
        setData({employee:{display:true, data:v}})
    }

    return (
        <table className="w-full table-fixed mt-2">
            <thead>
                <tr>
                    <th className='text-left'>ID</th>
                    <th className='text-left'>Name</th>
                    <th className='text-left'>Login</th>
                    <th className='text-left'>Salary</th>
                    <th className='text-left'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    displayEmployees && displayEmployees.map((v,i)=>{
                    return(<tr key={i}>
                        <td>{v.id}</td>
                        <td>{v.fullName}</td>
                        <td>{v.loginId}</td>
                        <td>RM {v.salary}</td>
                        <td>
                            <div className='flex space-x-2'>
                                <span onClick={()=>deleteMe(v.idFirebase)}>
                                <AiFillDelete className='text-lg hover:cursor-pointer' />
                                </span>
                                <span onClick={()=>editMe(v)}>
                                <AiFillEdit className='text-lg hover:cursor-pointer'  />
                                </span>
                            </div>
                            
                        </td>
                    </tr>
                    )} )
                }
                
            
            </tbody>
        </table>
    )
}

export default DisplayEmployee