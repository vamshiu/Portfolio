import React from 'react'
import photo from "../assets/photo.jpg"
import pin from "../assets/pin.png"


function About() {
  return (
    
        <div className=' h-[800px]  bg-black flex  flex-col items-center text-white pt-[150px] 'name='about'>
            <h1 className='font-bold text-4xl border-b-2 text-white border-[#ffff00] mt-2 mb-10  '>About Me</h1>
            <div className='max-w-[1100px] items-center justify-center text-white grid grid-cols-1 sm:grid-cols-2 pt-10'>
                <img className='w-[200px] sm:w-[400px] mx-auto sm:mx-0'src={photo} alt="" />
                <div className='p-5 ml-2 sm:ml-0 '>
                <p className='py-1'>Hi I am U Vamshi , a passionate front end React developer based in Hyderabad, India.📍 </p>
                <p className='py-1'>Also into problem solving using Java.</p>
                <p className='py-1'>Qualification- Btech, VNRVJIET.</p>
                <p className='py-1'>My hobbies include playing basketball 🏀 and photography 📷.</p>
                <p className='py-1'>Please take a look around the website.</p>
                </div>            

            </div>


        </div>
      
    
  )
}

export default About
