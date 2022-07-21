import React from 'react';

const Homepage =()=>{
    return(
   <div className='flex flex-col sm:flex-row h-screen w-screen font-Rajdhani' >
        <div className='flex flex-col  h-screen w-screen pt-20 sm:pt-40 px-10 sm:pl-20'>
            <label className='text-[4vmax] sm:text-[4vmax] font-extrabold text-violet-900 ' >Reward <br/> True Loyalty</label>
            <p className='mt-8 text-xl sm:text-2xl  ' >Reward your brand’s biggest fans,<br/> wherever they shop. </p>
            <p className='mt-8 text-xl sm:text-2xl '>Use SolanaPay to track and engage loyal <br/> customers with exclusive offers.</p>
            <a href='/programs'><button className='bg-violet-900 w-fit h-fit px-[5%] py-[1%] text-white font-medium rounded-full mt-12 text-4 sm:text-2xl my-5 ' >Get Started</button></a>
            <label className='mt-10'>Powered by : <img src='https://www.freelogovectors.net/svg10/polygon_token_logo-freelogovectors.net_.svg' className='w-[20%] mt-1 mb-5' /> </label>
        </div>
        <div className='flex flex-col bg-violet-900 h-screen w-screen ' >

        </div>
   </div>
)}

export default Homepage;