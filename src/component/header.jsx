import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-slate-900 p-4">
      <div className="max-w-[1240px] py-[12px] flex justify-between items-center mx-auto">
   
  {/* icons */}
  
    {!toggle ? (
      <AiOutlineMenu onClick={() => setToggle(!toggle)} 
      className="text-white md:hidden block text-2xl" />
    ) : (
      
      <AiOutlineClose onClick={() => setToggle(!toggle)}
      className="text-white md:hidden block text-2xl"/>
    )
  }
  



        <ul className="hidden md:flex gap-20 text-slate-200">
            <li className="hover:text-[lightblue] cursor-pointer font-semibold"> Hero </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold"> About </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold"> Serives </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold"> Skills </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold"> Projects </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold"> Timeline </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold">Testimonial </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold">Contact Form </li>
        </ul>
        {/* responsive menu   */}
        <ul className=  { `duration-300 md:hidden w-full h-screen bg-slate-800 text-slate-200 top-[65px] fixed py-3
         ${toggle ? 'left-[0]' :'left-[-100%]'}`}  > 
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Hero </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> About </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Serives </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Skills </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Projects </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Timeline </li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Testimonial</li>
            <li className="hover:text-[lightblue] cursor-pointer font-semibold p-4 text-2xl shadow-md shadow-black "> Contact Form</li> 
            
        </ul>
      </div>
    </div>
  );
}

export default Header;
