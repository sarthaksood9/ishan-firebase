import React from 'react'

const Model = (props) => {
  return (
    <div onClick={props.data} className='h-[100vh] w-[100%] bg-[rgba(0,0,0,0.2)] flex justify-center items-center absolute top-0'>
        <div onClick={(e) => e.stopPropagation()} className='w-[45%] h-[50%] bg-amber-200 flex flex-col px-[3%] gap-[10%] overflow-y-hidden py-[2%]  '>
            <div className='flex flex-col'>
            <h1>Project Name</h1>
            <input className='w-[40%]' placeholder='Enter Project Name'/>
            </div>
            <div>
            <h2>Project details</h2>
            <textarea className='w-[100%] max-h-[120px] h-[80px]' placeholder='Enter Project details'/>
            </div>
            <div className='flex flex-col'>
                <button onClick={props.data} className='w-[20%] h-[50px] bg-amber-500 rounded-[100px] place-self-end'>add project</button>
            </div>

        </div>
    </div>
  )
}

export default Model