import React from 'react'
import {BsBellFill} from "react-icons/bs"
import {RxAvatar} from "react-icons/rx"

const header = () => {
  return (
    <div className='h-[5vh] bg-[#1a73e8] flex justify-between items-center px-[1%]'>
        <div className='text-white'>Logo</div>
        <div className='flex items-center gap-[15px]'>
            <p className='text-white'>Go to Docs</p>
            <BsBellFill size={20}/>
            <RxAvatar className=' text-white' size={30}/>
            
        </div>
    </div>
  )
}

export default header