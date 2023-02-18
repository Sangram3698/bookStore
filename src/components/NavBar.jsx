import React, { useState } from 'react';
import {VscSearch} from 'react-icons/vsc';
import {RxAvatar} from 'react-icons/rx';
import {BsCart} from 'react-icons/bs';
import {FaTimes,FaBars} from 'react-icons/fa'

const NavBar = () => {
  const[nav,setNav]=useState(false);
  return (




    //this is the main div for navbar



    
    <div
     className=' flex items-center justify-between py-2 sticky'
     >
     <div className='flex mx-2 px-1'>
     <div className=' text-xl px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 left-3' >VishoKosh</div>
     <div className='search cursor-pointer hover:scale-105 duration-200'><VscSearch/>
     </div>
     </div>
     <div className='hidden md:flex '> 
     <div className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>Engineering</div>
     <div className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>Medical</div>
     <div className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>Other</div>
     </div>
     <div className='hover:scale-110 duration-200'><button className='btn'>Login/SignUp</button></div>
     <div className=" hidden avtar md:flex">
      <div className='px-4 cursor-pointer font-medium hover:scale-105 duration-200 avtar'><RxAvatar size={30}/></div>
      <div  className='px-4 cursor-pointer font-medium hover:scale-105 duration-200 cart'><BsCart size={30}/></div>
     </div>
     <div>
      <p className='hidden md:flex font-medium text-black hover:scale-110 duration-200 cursor-pointer mx-3 px-2'>Sell</p>
     </div>



     {/* 
     the section below is for responsive design...when the size of screen is below 640px then engineering,medical and other options gets disappeared 
     along with cart avatar and sell and burger menu appears..when clicked in burger menu then these options appears in column
     */}



     <div onClick={()=>setNav(!nav)}
     className='cursor-pointer pr-4 md:hidden z-10 text-gray-500'
     >
      {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
     </div>
     {nav &&(
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-1/2 h-screen burger text-white">
        <div className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>Engineering</div>
     <div className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 my-4'>Medical</div>
     <div className='px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200'>Other</div>
     <div className='px-4 cursor-pointer font-medium hover:scale-105 duration-200 avtar my-1'><RxAvatar size={30}/></div>
      <div  className='px-4 cursor-pointer font-medium hover:scale-105 duration-200 cart my-1'><BsCart size={30}/></div>
      <p className=' font-medium text-black hover:scale-110 duration-200 cursor-pointer mx-3 px-2'>Sell</p>
      </div>
     )}
    </div>
  )
}

export default NavBar;