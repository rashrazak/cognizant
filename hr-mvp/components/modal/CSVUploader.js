import React, {useState, useContext, useEffect} from 'react'
import Main from './Main'
import { HRMVPContext } from '../../context'
import firebase from '../../utils/firebase'
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

    const handleCsvUpload = (e) => {
        setLoading(true)
        // setClose()
        let files = e.target.files

        for (let index = 0; index < files.length; index++) {
            const file = files[index];
            if (file) {
                var r = new FileReader
                r.onload = async function (e) {
                    var contents = e.target.result;
                    console.log(contents)
                    var lines = contents.split("\n")
                    for (var i=0; i<lines.length; i++){
                        var param = {}
                        let newLine = lines[i].split(',')
                        newLine.map((v,i)=>{
                            if (i == 0) param.id = `e${Math.floor((Math.random() * 10000) + 1)}` 
                            if (i == 1) param.loginId = v
                            if (i == 2) param.fullName = v
                            if (i == 3) param.salary = parseFloat(v).toFixed(2)

                        })
                        await firebase.addEmployees(param)
                        if (i == lines.length - 1) {
                            setLoading(false)
                            setClose()
                        }

                    }
                }
                r.readAsText(file)
            }
        }
    }
    return (
        <>
        {
            uploadModal &&  
            <Main title='Upload CSV' setClose={setClose}>
                <div> 
                    <div className=''>
                        <div className='flex items-center mb-3'>
                            <input
                                type="file"
                                accept=".csv"
                                onChange={e => handleCsvUpload(e)}
                                multiple
                            />
                        </div>
                      
                    </div>
                    <div className='mt-7 float-right'>
                        <button className={`py-3 relative`} onClick={setClose}>Close </button>
                    </div>
                </div>
            </Main>
        }
        </>
       
    )
}

export default CSVUploader