import React from 'react'
import fblogo from '../assets/fblogo.png';
import instalogo from '../assets/instalogo.png';
import linkdinlogo from '../assets/linkdinlogo.png';
import telegramlogo from '../assets/telegramlogo.png';
import discordlogo from '../assets/discordlogo.png';
import whatsapplogo from '../assets/whatsapplogo.png';

const Footer = () => {
  return (
    <div className='footer w-full h-fit md:w-full flex flex-col'>
  
      <div className="upper flex justify-between mx-8">
        {/* here are two divs that contains go connection and vishokosh contents */}
    <div className="logoStuff">
     <h4>VishoKosh</h4>
     <div className='text-start mt-3'>
     <p>Dharan-8 Tinkune <br /> 9856214896</p>
     <a href="/"> <p className=' underline'>abc@gmail.com</p></a>
     </div>
    </div>
    <div className="connection mr-7">
      <h4>Go connection!!</h4>
      <div className='flex justify-items-end gap-4'>
       <a href="/" className=' hover:scale-105 duration-200'> <img src={fblogo} alt="fb" className='img' /></a>
       <a href="/" className=' hover:scale-105 duration-200'> <img src={instalogo} alt="fb" className='img' /></a>
       <a href="/" className=' hover:scale-105 duration-200'> <img src={linkdinlogo} alt="fb" className='img' /></a>
      </div>
      <div className='flex justify-items-end gap-4 mt-4'>
      <a href="/" className=' hover:scale-105 duration-200'> <img src={telegramlogo} alt="fb" className='img' /></a>
       <a href="/" className=' hover:scale-105 duration-200'> <img src={discordlogo} alt="fb" className='img' /></a>
       <a href="/" className=' hover:scale-105 duration-200'> <img src={whatsapplogo} alt="fb" className='img' /></a>
      </div>
    </div>
    {/* up to here the images and vishokosh content will be seen */}
      </div>


      {/* this will contain the  */}
      <div className="lower flex flex-col w-full md:w-3/4">
        <div className='queries flex justify-start gap-6 mt-4 ml-6'>
         <a href="/"> <p className=' text-xl capitalize font-medium hover:scale-105 duration-200'>FAQ</p></a>
          <a href="/"><p className=' text-xl capitalize font-medium hover:scale-105 duration-200'>Support Us</p></a>
          <a href="/"><p className=' text-xl capitalize font-medium hover:scale-105 duration-200'>Join Us</p></a>
          <a href="/"><p className=' text-xl capitalize font-medium hover:scale-105 duration-200'>Forum</p></a>
        </div>
        <div className="datum text-xl mt-8 ml-6 copy_right">Powered By Datum Tech Industry</div>
      </div>
    </div>
  )
}

export default Footer;