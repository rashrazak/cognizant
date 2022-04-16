import React, {useState} from 'react'
import { FaUserCircle, FaSearch } from 'react-icons/fa';

function Header() {

    return (
        <div className='sm:bg-black'>
            <div className='flex justify-between items-center' style={{backgroundColor:"#F3F3F3"}}>
                <div className='flex justify-between]'>
                    <div className="relative flex w-32 items-center justify-center bg-blue-500 lg:w-[200px]">
                        <p className='p-4 font-serif font-extrabold text-2xl text-white' >Test 123</p>
                    </div>
                    <div className='p-4 w-60 '>
                        <div className='h-10 py-2 px-3 rounded-2xl flex justify-between bg-white' style={{color:"#7c7c7c"}}>
                            <input className='w-28 italic font-semibold text-sm' type={'text'} placeholder="Type to Search..." /><FaSearch className='text-sm font-semibold mt-2' />
                        </div>
                    </div>
                </div>
                
                
                <div className=' p-4 flex flex-row gap-2' style={{color:"#7c7c7c"}}>
                <FaUserCircle className='text-3xl' /><div className='text-sm font-normal mt-1'> Lorem Ipsum</div>
                </div>
            </div>
        </div>
    )
}

export default Header
