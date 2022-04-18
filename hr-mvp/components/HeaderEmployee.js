import React, { useState } from 'react'
import { FaUserCircle, FaSearch } from 'react-icons/fa';

function HeaderEmployee() {

    const [radio, setRadio] = useState('min')
    const [sortType, setSortType] = useState('second')
    const [sortOrder, setSortOrder] = useState('asc')
    
    return (
        <div className='flex justify-items-start my-3'>
            <div className=' flex flex-col'>
                <p className='text-sm font-medium mt-3' style={{color:"#9f9f9f"}}>Search based on max and min Salary</p>
                <div className='flex justify-items-start items-center' >
                    <div className='flex'>
                        <div className=' w-30 py-1'>
                            <div className='h-10 py-2 px-3 rounded-lg flex justify-between border-2 mr-2' style={{color:"#7c7c7c"}}>
                            <input className='w-30 px-3 italic font-semibold text-sm ring-0 ' type={'number'} placeholder="Set salary" />
                            </div>
                        </div>
                        <div className='flex flex-row py-3 space-x-2' onChange={(e)=>setRadio(e.target.value)}>
                            <div className='rounded-2xl' style={{color:"#7c7c7c"}}>
                            <span><input type="radio" value="min" className='w-5 italic font-semibold text-sm' checked={radio == "min"} />Min</span>
                            </div>
                            <div className='rounded-2xl' style={{color:"#7c7c7c"}}>
                            <span><input type="radio" value="max" className='w-5 italic font-semibold text-sm' checked={radio == "max"}  />Max</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-3 flex flex-col ml-5'>
                <p className='text-sm font-medium mt-3' style={{color:"#9f9f9f"}}>Sort based on ascending and descending</p>
                <div className='flex justify-items-start items-center' >
                    <div className='flex'>
                        <div className=' w-40 py-1'>
                            <div className='h-10 py-2 px-3 rounded-lg flex justify-between border-2 mr-2' style={{color:"#7c7c7c"}}>
                            <select value={sortType} onChange={(e)=>setSortType(e.target.value)} className={`italic font-semibold text-sm w-full`}>
                                <option value="">Order by</option>
                                <option value="salary">salary</option>
                                <option value="id">id</option>
                                <option value="login">login</option>
                            </select>
                            </div>
                        </div>
                        <div className='flex flex-row py-3 space-x-2' onChange={(e)=>setSortOrder(e.target.value)}>
                            <div className='rounded-2xl' style={{color:"#7c7c7c"}}>
                            <span><input type="radio" value="asc" className='w-5 italic font-semibold text-sm' checked={sortOrder == "asc"} />Asc</span>
                            </div>
                            <div className='rounded-2xl' style={{color:"#7c7c7c"}}>
                            <span><input type="radio" value="desc" className='w-5 italic font-semibold text-sm' checked={sortOrder == "desc"}  />Desc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default HeaderEmployee