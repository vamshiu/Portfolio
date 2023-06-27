import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <div className='bg-black w-full h-screen ' name='Home'>
        <Fade top big>
        <div className='flex flex-col justify-center h-screen max-w-[1000px] mx-auto px-8 '>
            <p className='text-[#ffff00]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-9xl font-bold text-white'>U Vamshi</h1>
            <p className='text-white'>This is my portfolio project using react.</p>

            <div>
            <button className='text-white border-2 group px-4 py-3 my-4 flex  justify-between items-center hover:bg-[#ffff00] hover:text-black font-bold group'>
            <Link className='group' to="work"smooth={true} offset={50} duration={500}>
                  View Work
                </Link>
                 
                <span className='group-hover:rotate-90 duration-200'>
                <HiArrowNarrowRight className='ml-2' />
                 
                </span>
            </button>
        </div>
        </div>
        </Fade>
       
       
      
    </div>
  )
}

export default Home
