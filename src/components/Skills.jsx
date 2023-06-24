import React from 'react'

export default function Skills() {
  return (
    <div className='items-center justify-center flex flex-col'>
        <h1 className='text-white font-bold text-4xl border-b-2 inline border-[#ffff00] mb-5'> My Skills</h1>
        <div className=' flex flex-col sm:flex-row justify-evenly w-full h-[500px] max-w-[1000px] ml-8 sm:ml-0 text-white  items-strech mt-10'>
                
                <div className=''>
                    <h1 className='font-bold text-2xl text-[#ffff00]'>Programming Languages</h1>
                    <ul className='p-3 '>
                        <li className='p-1'>Java</li>
                        <li className='p-1'>Python</li>
                        <li className='p-1'>Java Script</li>
                    </ul>
                </div>

                <div className='mr-[105px] sm:mr-0'> 
                    <h1  className='font-bold text-2xl text-[#ffff00] '>Front-End Skills</h1>
                    <ul className='p-3'>
                        <li className='p-1'>HTML</li>
                        <li className='p-1'>CSS</li>
                        <li className='p-1'>React</li>
                    </ul>
                </div>

            </div>
    </div>

    
  )
}
