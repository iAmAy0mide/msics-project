"use client";

import React from 'react';
import Logo from "/public/Logo.svg";
import Image from "next/image";
import Link from 'next/link';
import { FaDoorClosed,  } from 'react-icons/fa';
import { RiMenuFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <nav className='fixed z-50 pt-4 pb-6 flex items-center glassy-white justify-between h-16 w-full mx-auto mobile px-8 md:px-12'>
      <div className="relative w-full h-full flex items-center justify-between">
        <Link href="/" className='w-40'>
          <Image 
           className='w-full'
           width={100} 
           height={100}
           alt='Logo'
           src={Logo}
          />
        </Link>
        <div className="flex space-x-16 pt-[10px] ">
          <Link 
            href="#mission"
            className='hidden md:block'
             >
              Mission
          </Link>
          <Link 
            href="#product"
            className='hidden md:block'
             >
              Product
          </Link>
          <Link 
            href="#contact"
            className='hidden md:block'
             >
              Contact
          </Link>
        </div>
        <div className="md:hidden flex flex-col relative">
          <RiMenuFill size={24} onClick={() => setIsOpen(!isOpen)} className={` ${ isOpen && "hidden"}`} />
          <AiOutlineClose size={24} onClick={() => setIsOpen(!isOpen)} className={`${ !isOpen && "hidden"}`} />
        </div>
        <div className={`${isOpen ? "-translate-x-[10vw]" : "translate-x-[100vw]"} flex flex-col items-start glassy-black transition-all duration-500 md:hidden   w-[110vw] h-[100vh] top-[160%] absolute pl-16 pt-4`}>

          <div className=" flex flex-col  w-[80%] text-[#f4f1e6] px-8 rounded-[2rem] h-[80%]  bg-[#5480d3]  pt-8 overflow-hidden">
            <Link 
              href="#mission"
              onClick={() => setIsOpen(false)}
              className='py-4 px-8 glassy-blue rounded-[2rem] hover:brightness-105 transition-all duration-300 shadow-md'
              >
                Mission
            </Link>
            <Link 
              href="#product"
              onClick={() => setIsOpen(false)}
              className='py-4 px-8 glassy-blue rounded-[2rem] hover:brightness-105 transition-all duration-300 shadow-md my-8'
              >
                Product
            </Link>
            <Link 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className='py-4 px-8 glassy-blue rounded-[2rem] hover:brightness-105 transition-all duration-300 shadow-md'
              >
                Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
