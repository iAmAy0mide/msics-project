import React from 'react';
import Logo from "/public/Logo.svg";
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='fixed pt-4 flex items-center justify-between h-16 w-full mx-auto mobile px-8 md:px-12'>
        <Link href="/" className='w-40'>
          <Image 
           className='w-full'
           width={100} 
           height={100}
           alt='Logo'
           src={Logo}
          />
        </Link>
        <div className="flex space-x-16">
          <Link 
            href="#mission"
            className=''
             >
              Mission
          </Link>
          <Link 
            href="#product"
            className=''
             >
              Product
          </Link>
          <Link 
            href="#contact"
            className=''
             >
              Contact
          </Link>
        </div>
    </nav>
  )
}

export default NavBar;
