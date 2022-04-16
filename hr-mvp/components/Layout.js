import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout() {
    return (
        <div className="w-full h-full">
            <Header />
            <div className="w-[60px] lg:w-[200px] lg:block fixed h-full z-0" style={{backgroundColor:"#3f4044"}}>
                <Sidebar />
            </div>
            
            <div className="ml-[50px] w-auto lg:w-auto h-full lg:ml-[200px] pl-8 pt-4 pb-48 lg:p-4">
                <div className='h-full overflow-y-hidden'>
                    <h3 className='text-xl font-medium mb-3' style={{color:"#9f9f9f"}}>Products</h3>
                    <hr/>
                </div>
                
            </div>
        </div>
    )
}

export default Layout
