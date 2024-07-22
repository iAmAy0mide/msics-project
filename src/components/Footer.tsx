import React from 'react'
import Image from "next/image";
import PaperTexture from '/public/paper-texture1.jpg'
import Logo from "/public/Logo.svg";

const Footer = () => {
  return (
    <footer className='h-[10rem] flex justify-center items-center' style={{ backgroundImage: `url(${PaperTexture.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <p className='flex items-center'>copyrights ©2024 <Image className='w-40 ml-4 -mt-2 self-center' width={100} height={100} src={Logo} alt="logo" /></p>
    </footer>
  )
}

export default Footer
