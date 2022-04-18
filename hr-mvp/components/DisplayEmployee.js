import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

function DisplayEmployee() {
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
            <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
                <td>
                    <div className='flex space-x-2'>
                        <AiFillDelete className='text-lg hover:cursor-pointer'  />
                        <AiFillEdit className='text-lg hover:cursor-pointer'  />
                    </div>
                    
                </td>
            </tr>
           
        </tbody>
    </table>
  )
}

export default DisplayEmployee