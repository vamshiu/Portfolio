import React from 'react'

function contact() {
  return (
    <div name='Contact' className=' w-full h-screen bg-black flex  justify-center items-center text-white'>
       
        <form className='flex flex-col max-w-[600px] w-full font-bold' method='POST' action="https://getform.io/f/74cb0979-011e-4874-a1a0-7affd207adfd">
            <div className='text-white '>
                <p className='text-white text-4xl font-bold inline border-b-2 border-[#ffff00]'>Contact</p>
                
                <p className='font-light text-[#ffff0060] my-3' >//This is a functional form.</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='rounded p-2 text-black' />
            <input type="email" placeholder='Your Email' name='Email' className=' p-2 my-4 rounded text-black' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='texxt-black p-2 rounded text-black'></textarea>
            <button type='submit' className='my-3 p-4 bg-[#ffff00] max-w-[100px] text-black font-bold'>Submit</button>
        </form>
       
    </div>
  )
}

export default contact
