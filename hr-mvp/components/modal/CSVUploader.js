import React, {useState, useContext, useEffect} from 'react'
import Main from './Main'
import { HRMVPContext } from '../../context'
import {IoMdArrowRoundForward} from 'react-icons/io'

function CSVUploader() {

    const {state, actions} = useContext(HRMVPContext)
    const {uploadModal} = state
    const {setData, setLoading} = actions

    const setClose = () =>{
        setData({uploadModal:false})
    }
  
    const uploadCSV = () =>{
       
        setLoading(true)
    }

    const handleImageUpload = (e) => {
        setLoading(true)
        let files = e.target.files
        
            
        for(let i = 0; i < files.length; i++) {
            let name = files[i].name;
            let type = files[i].type;
            for (let index = 0; index < bookImages.length; index++) {
                if (bookImages[index].originalName == name) {
                    setLoading(false)
                    alert(`You've uploaded this csv, please try a different csv.`)

                    return false //stop loop and stop fn
                }
                if (!type.includes('csv')) {
                    setLoading(false)
                    alert(`${type} - Not Supported`)

                    return false //stop loop and stop fn
                }
            }
        }
        
        uploadImages(files).then((response) =>{
            if (response) {
               console.log(response)
            }else{
                setLoading(false)
            }
        })        
        
    }
    return (
        <>
        {
            uploadModal &&  
            <Main title='Upload CSV' setClose={setClose}>
                <div> 
                    <div className=''>
                        <div className='flex items-center mb-3'>
                            <span className='font-normal text-black text-xs block flex-1'>Wallet balance</span>
                            <input
                                type="file"
                                accept=".csv"
                                onChange={e => handleImageUpload(e)}
                                multiple
                            />
                        </div>
                      
                    </div>
                    <div className='mt-7'>
                        <button className={`py-3 relative`} onClick={uploadCSV}>Submit API <IoMdArrowRoundForward className='absolute right-4 top-2/4 -translate-y-2/4'/></button>
                    </div>
                </div>
            </Main>
        }
        </>
       
    )
}

export default CSVUploader