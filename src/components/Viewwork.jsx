import React from 'react'
import work from "../assets/work.png";
function Viewwork() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-black pb-5'name='work'>
        <h1 className='text-white font-bold text-4xl border-b-2 border-[#ffff00]'>My Work</h1>
        <h1 className='text-[#ffff00] my-10'>An Expense Tracker application made using React and Firebase.</h1>
        <div className='flex items-center justify-center max-w-[1000px] group '>
            <img className='shadow-xl shadow-amber-900 fill-black group-hover:grayscale group-hover:blur-sm duration-300 border-t-2 border-amber-800' src={work} alt=""  />  
            <a className='absolute'href="https://vamshiu.github.io/expense-tracker/"><button className=' opacity-0 group-hover:opacity-100 duration-300 group-hover:text-black  border-2 border-black group px-4 py-3 my-4 flex  justify-between items-center group-hover:bg-amber-700 hover:text-black font-bold '>View Demo</button> </a>     
        </div>
        
        
        
        
        
      
    </div>
  )
}

export default Viewwork
