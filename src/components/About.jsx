import React from 'react'
import photo from "../assets/photo.jpg"
import pin from "../assets/pin.png"


function About() {
  return (
    
        <div className='w-full h-screen bg-black flex flex-col   items-center text-white pt-10 'name='about'>
            <h1 className='font-bold text-4xl border-b-2 text-white border-[#ffff00] mt-2 mb-10 '>About Me</h1>
            <div className='max-w-[1000px] items-center justify-center text-white grid grid-cols-1 sm:grid-cols-2 pt-10'>
                <img className='w-[400px]'src={photo} alt="" />
                <div>
                <p className='py-1'>Hi I am U Vamshi ,A passionate front end React developer based in Hyderabad, India.📍 </p>
                <p className='py-1'>Also into problem solving using Java.</p>
                <p className='py-1'>My hobbies include playing basketball 🏀 and photography 📷.</p>
                <p className='py-1'>Please take a look around the website.</p>
                </div>
                
                
                

            </div>

            <div className='items-center flex flex-col sm:flex-row h-screen justify-evenly w-full  max-w-[1000px] m-auto'>
                <div className=''>
                    <h1 className='font-bold text-2xl text-[#ffff00]'>Programming Languages</h1>
                    <ul className='p-3 '>
                        <li className='p-1'>Java</li>
                        <li className='p-1'>Python</li>
                        <li className='p-1'>Java Script</li>
                    </ul>
                </div>

                <div>
                    <h1  className='font-bold text-2xl text-[#ffff00]'>Front-End Skills</h1>
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

export default About
