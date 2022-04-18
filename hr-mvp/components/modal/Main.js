import React, {useState, useEffect, useContext} from 'react'

//current usage /login n /signup
function Main({setClose, children, title, showX = true, width = 'max-w-xl'}) {

    const handleClose = async () => {
        setClose(false)
    }

    return ( 
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-2">
                <div className={`bg-white rounded-lg relative ${width} w-full shadow-lg max-h-[calc(100vh-30px)] overflow-y-auto`}>
                    <div className="px-4 pt-4 pb-1 flex items-center">
                        <div className="w-full text-gray-900 font-bold text-lg text-center ">{title}</div>
                        {
                            showX &&  
                            <svg onClick={handleClose} className="ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                            </svg>
                        }
                       
                    </div>
                    <div className="px-4 pb-4 overflow-x-hidden overflow-y-auto relative">
                        {children}
                    </div>
                </div>
            </div>
            <div className="opacity-60 fixed inset-0 z-40 bg-black md:bg-white"></div>
            <style jsx>{`
                
            `}</style>      
        </>  
    )
}

export default Main
