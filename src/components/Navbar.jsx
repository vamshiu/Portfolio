import React ,{useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[nav,setNav]=useState(false)
    const handleClick=() => setNav(!nav)
  return (
    <div name='barb' className='fixed w-full h-[80px] flex  bg-black text-gray-300 items-center justify-between '>
      <div>
        <ul className='fixed right-0 hidden md:flex' >
            <li><Link to="Home"smooth={true} offset={50} duration={500}>
              Home
            </Link></li>
            <li><Link to="about"smooth={true} offset={50} duration={500}>
              About
            </Link></li>
            <li><Link to="work"smooth={true} offset={50} duration={500}>
              Projects
            </Link></li>
            <li><Link to="Contact"smooth={true} offset={50} duration={500}>
              Contact
            </Link></li>
            
        </ul>
      </div>



      {/* hammy button */}
      <div onClick={handleClick}  className='md:hidden z-10 '>
        {!nav? <FaBars/> : <FaTimes/>}
      </div>



      {/* mob menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black  flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="Home"smooth={true} offset={50} duration={500}>
              Home
            </Link></li>
             <li className='py-6 text-4xl'> <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"smooth={true} offset={50} duration={500}>
              About
            </Link></li></li>
             <li className='py-6 text-4xl'> <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"smooth={true} offset={50} duration={500}>
              Projects
            </Link></li> </li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="Contact"smooth={true} offset={50} duration={500}>
              Contact
            </Link></li>
      </ul>



      {/* sidebar */}
      <div className='hidden md:flex fixed flex-col left-0 top-[35%]  '>
      <ul>
        
        <li className='w-[160px] h-[60px] flex items-center justify-between bg-blue-950 ml-[-100px] hover:ml-[0px] duration-500' >
            <a className='flex w-full justify-between'href="https://www.linkedin.com/in/uppari-vamshi-262368264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Buv7c%2BqfzRLauVdhNWo8IXA%3D%3D">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex items-center justify-between bg-orange-900 ml-[-100px] hover:ml-[0px] duration-500'>
            <a className='flex w-full justify-between'href="https://github.com/vamshiu">
                Github <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex items-center justify-between bg-red-900 ml-[-100px] hover:ml-[0px] duration-500'>
            <a className='flex w-full justify-between'href="https://mail.google.com/mail/?view=cm&fs=1&to=vamshi.a130@gmail.com">
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
      </ul>
      </div>

        
      

    </div>
  )
}

export default Navbar
