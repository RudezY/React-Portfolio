import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import gif from '../assets/fujiiiiiiiiiiiiiiiiiii.gif'

export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        // src="https://assets3.thrillist.com/v1/image/3115440/2880x1620/crop;webp=auto;jpeg_quality=60;progressive.jpg" alt='/'
        src={gif} alt='/'
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Rudy Yamashiro</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I am a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                3000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                3000,
                "Power Lifting Enthusiast", // Types 'Four' without deleting '
                3000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20}/>
            <FaFacebookF className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
}
