import React from 'react';
import GetContract from '../hooks/GetContact';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Points = () => {

    const[name,setName] = React.useState('');
    const[reward,setReward] = React.useState('');
    const[multi,setMulti] = React.useState('');

    const contract = GetContract();
    console.log(contract);

    const success = () => toast.success("Transaction Submitted" ,{
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const addprogram = async()=>{
        try{
            const tx =await contract.addProgram(name,reward,multi);
            success();
            console.log(tx);
        }catch(err){
            toast.error(`${err.message}`,{position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,});
        }
    }

    return (
        <div className='flex flex-col sm:flex-row w-screen h-screen' >
            <div className='flex flex-col w-screen sm:w-[60%] h-fit' >
        <div className='flex flex-col w-screen h-screen font-Rajdhani text-violet-900 p-[5%] pt-14 sm:p-[5%]' >
           <a href='/programs'><p className='text-md font-medium' >All Programs</p></a>
            <p className='text-4xl font-bold mt-5'>Setup Points Program</p>
            <div className='flex flex-col mt-10' >
                    <p className='font-semibold'>Program Name</p>
                    <input className='w-fit sm:w-[20%] h-fit p-2 rounded-full bg-gray-100' placeholder='Summer Holiday Sale' mt-2 onChange={(e)=>setName(e.target.value)} />
                </div>
            <div className='flex flex-col sm:flex-row w-fit sm:w-full h-fit mt-10' >
                <div className='flex flex-col mt-5 mr-5' >
                    <p className='font-semibold'>Rewards per USDC spent</p>
                    <input className='w-fit h-fit p-2 rounded-full bg-gray-100' placeholder='0.0 USDC' mt-2 onChange={(e)=>setReward(e.target.value)} />
                </div>
                <div className='flex flex-col mt-5 mr-5' >
                    <p className='font-semibold'>Points Multiplier</p>
                    <input className='w-fit h-fit p-2 rounded-full bg-gray-100' placeholder='x10000' mt-2 onChange={(e)=>setMulti(e.target.value)} />
                </div>
            </div>
            <p className='font-semibold mt-10'>Example</p>
            <label className='p-5 bg-gray-100 rounded-2xl w-full sm:w-[40%]' >Here's is an example program</label>
            <button className='w-fit h-fit px-4 py-2 bg-violet-900 text-white font-semibold rounded-2xl mt-10' onClick={addprogram} >Launch Program</button>
            <ToastContainer/>
        </div>
        </div>
        <div className='flex flex-col w-screen sm:w-[40%] h-fit bg-blue-300' >
            <label>Merchant Details</label>
        </div>
        </div> 
     );
}
 
export default Points;