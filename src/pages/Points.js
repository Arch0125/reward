import React from 'react';

const Points = () => {
    return ( 
        <div className='flex flex-col w-screen h-screen font-Rajdhani text-violet-900 p-[5%] pt-14 sm:p-[5%]' >
            <p className='text-md font-medium' >All Programs</p>
            <p className='text-4xl font-bold mt-5'>Setup Points Program</p>
            <div className='flex flex-col sm:flex-row w-fit sm:w-full h-fit mt-10' >
                <div className='flex flex-col mt-5 mr-5' >
                    <p className='font-semibold'>Rewards per USDC spent</p>
                    <input className='w-fit h-fit p-2 rounded-full bg-gray-100' placeholder='0.0 USDC' mt-2 />
                </div>
                <div className='flex flex-col mt-5 mr-5' >
                    <p className='font-semibold'>Points Multiplier</p>
                    <input className='w-fit h-fit p-2 rounded-full bg-gray-100' placeholder='x10000' mt-2 />
                </div>
            </div>
            <p className='font-semibold mt-10'>Example</p>
            <label className='p-5 bg-gray-100 rounded-2xl w-full sm:w-[40%]' >Here's is an example program</label>
            <button className='w-fit h-fit px-4 py-2 bg-violet-900 text-white font-semibold rounded-2xl mt-10' >Launch Program</button>
        </div>
     );
}
 
export default Points;