import React, {useContext} from 'react';
import { HRMVPContext } from '../../context'

function Loading() {

    const {state} = useContext(HRMVPContext)
    const {isLoading} = state
    return ( 
        <>
            {
                isLoading &&
                <>
                    <div className="bg-white opacity-75 flex flex-col overflow-y-scroll md:overflow-y-hidden  overscroll-contain fixed top-9 sm:top-0 left-0 bottom-0 right-0 w-full h-screen inset-0 z-50 p-4">
                        <div className="sm:max-w-md sm:mx-auto relative md:mt-10 mb-10 h-screen flex justify-center items-center"> 
                            <h1>Loading...</h1>
                        </div>
                    </div>
                    <div className=" fixed inset-0 z-40 bg-white opacity-50"></div>
                </>
            }
            
        </>  
    )
}

export default Loading;
