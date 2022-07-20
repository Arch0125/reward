import React from 'react';

const Programs =()=>{
    return(
        <div className='flex flex-col w-screen h-screen p-[5%] pt-14 sm:p-[5%]' >
            <p className='text-3xl text-violet-900 font-bold font-Rajdhani'>Choose a rewards program</p>
            <p className='text-xl text-violet-900 font-medium font-Rajdhani' >Pick from one of our templates</p>
            <div className='flex flex-col sm:flex-row w-full h-screen mt-14' >
                <div className='flex flex-col w-full h-fit sm:w-[30%] border-2 rounded-2xl border-violet-900 p-8 mt-5 sm:mr-5 mr-0 text-violet-900 hover:bg-violet-900 hover:text-white hover:cursor-pointer' >
                    <p className='font-bold text-2xl  font-Rajdhani' >Points Program</p>
                    <p className='mt-2 font-medium text-xl font-Rajdhani'>Reward loyal customers with points for each purchase. You can add more prizes over time, and based on the level of loyalty.</p>
                </div>
            </div>
        </div>
    )
}
export default Programs;