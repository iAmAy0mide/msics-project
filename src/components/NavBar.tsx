import React from 'react';
import Logo from "/public/Logo.svg";
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='fixed z-50 py-4 flex items-center glassy-white justify-between h-16 w-full mx-auto mobile px-8 md:px-12'>
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
    </nav>
  )
}

export default NavBar;
