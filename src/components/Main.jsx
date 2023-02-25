import React, { useState } from 'react'
import Model from './Model';

const Main = () => {
    const noOfPro = [1, 2, 3, 4, 5]
    const ta = "</>";
    const [model,setmodel]=useState(false);
    const toggleModel = () =>{
        setmodel(false);
    }
    return (
        <>
        <div className='w-[100vw] h-[100vh] flex justify-center mt-[-10%]'>
            <div className=' w-[90%] md:w-[70%] h-fit '>
                <h3 className='text-white ml-[5%]'>Your Firebase Projects</h3>
                <div className='flex flex-wrap gap-6 p-[5%] w-full'>
                    <div onClick={()=>setmodel(true)} className='w-full md:w-[250px] h-[120px] bg-white shadow-[0_0_5px_rgba(0,0,0,0.05),2px_2px_5px_rgba(0,0,0,0.2)] rounded-[5px] flex flex-col justify-center items-center'>
                        <span className='text-[40px] text-[#1a73e8]'>+</span>
                        <span className=' text-[#1a73e8] text-[15px] text-[bold]'>Add project</span>
                    </div>

                    {noOfPro.map(i => {
                        return (
                            <div className='w-full md:w-[250px] h-[120px] bg-white shadow-[0_0_5px_rgba(0,0,0,0.05),2px_2px_5px_rgba(0,0,0,0.2)] rounded-[5px] p-[3%] flex flex-col justify-between'>
                                <div>
                                    <h1>sync light</h1>
                                    <p className='text-[gray] text-sm'>sync light</p>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        {model && <Model data={toggleModel} />}
        </>
    )
}

export default Main