import React,{useContext} from 'react'
import { FaArchive, FaRandom, FaCopy } from 'react-icons/fa';
import Link from 'next/link'
import { HRMVPContext } from '../context'

function Sidebar() {

    const {state, actions} = useContext(HRMVPContext)
    const {uploadModal} = state
    const {setData, setLoading} = actions
    
    const sLink = {
        linkHref:'text-md w-full font-normal align-middle group py-2 px-5',
        icon:'h-5 w-5 inline-block align-middle mr-4',
        hoverHref:'hover:bg-background-bg2 hover:rounded-md hover:font-bold',
        hoverIcon:'group-hover:text-yellow-400',
        active: (url) =>{
            // return url && Router.pathname.includes(url) ? 'bg-main-red-1 text-white rounded-md mx-auto':''
        },
    }
    return (
        <>
            <div className="z-0 lg:overflow-y-hidden lg:overflow-hidden">
                <div className="w-full h-16 relative flex items-center justify-center bg-transparent">
                </div>
                <div className="flex flex-col relative justify-center space-y-2 w-full h-full text-white py-4">
                    <span onClick={()=>setData({uploadModal:true})} className={`${sLink.linkHref} ${sLink.hoverHref} `}><FaArchive className={`${sLink.icon} ${sLink.hoverIcon}`} />
                    <span className='invisible lg:visible'>Upload CSV</span>
                    </span>
                    <Link href="#"><a className={`${sLink.linkHref} ${sLink.hoverHref}`}><FaCopy className={`${sLink.icon} ${sLink.hoverIcon}`} />
                    <span className='invisible lg:visible'>Whitelists</span> 
                    </a></Link>
                    <Link href="#"><a className={`${sLink.linkHref} ${sLink.hoverHref}`}><FaRandom className={`${sLink.icon} ${sLink.hoverIcon}`} />
                    <span className='invisible lg:visible'>Api Application</span> 
                    </a></Link>
                </div>
            </div>
           
           
        </>
        
    )
}

export default Sidebar
