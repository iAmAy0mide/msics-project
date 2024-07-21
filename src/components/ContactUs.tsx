"use client";

import React, { FormEvent } from 'react';
import { NextFont } from 'next/dist/compiled/@next/font';


const ContactUs = ({fontStyle}: Contact) => {
    const [userInput, setUserInput] = React.useState<IUserInputs>({
        name: "",
        email: "",
        message: "",
    });

    const handleUserInputs = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value} = e.target;
        setUserInput((prevState) => ({
            ...prevState,
            [name]: value
    }))
        
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
        
        console.log(userInput);
        setUserInput({
            name: "",
            email: "",
            message: ""
        });
        
    }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <div className="relative h-16">
        <label htmlFor="name" className="absolute h-full bg-[#ccc] px-4 flex items-center justify-center w-24">
            <div className={`${fontStyle.className} font-medium text-[1.2rem]`}>Name</div>
        </label>
        <input onChange={handleUserInputs} type="text" name="name" id="name" className='w-full h-full rounded-[2.4rem] py-2 pl-28 pr-2 placeholder:text-[#ccc] text-[#f4f1e6]  bg-[#5480d3] focus:-outline-offset-4 focus:outline-[#ccc] transition-all duration-300'
        placeholder='Your name'
        required
        />
      </div>
      <div className="relative h-16 my-4">
      <label htmlFor="name" className="absolute h-full bg-[#ccc] px-4 flex items-center justify-center w-24">
            <div className={`${fontStyle.className} font-medium text-[1.2rem]`}>Email</div>
        </label>
        <input onChange={handleUserInputs} type="text" name="email" id="email" className='w-full h-full rounded-[2.5rem] outline-none border-0 py-2 pl-28 pr-2 placeholder:text-[#ccc] text-[#f4f1e6] bg-[#5480d3] focus:-outline-offset-4 focus:outline-[#ccc] transition-all duration-300'
        placeholder='Your email'
        required
        />
      </div>
      <div className="relative">
        <label htmlFor="name" className="absolute h-16 bg-[#ccc] px-4 flex items-center justify-center w-24">
            <div className={`${fontStyle.className} font-medium text-[1.2rem]`}>Message</div>
        </label>
        <textarea onChange={handleUserInputs} name="message" id="message" className='w-full h-f ull rounded-[2.5rem] outline-none border-0 py-2 pl-28 pr-2 placeholder:text-[#ccc] text-[#f4f1e6] resize-none bg-[#5480d3] h-[25vh] sm:h-[30vh] focus:-outline-offset-4 focus:outline-[#ccc] transition-all duration-300'
        placeholder='Your Message'
        required
        />
      </div>
      <button className={`${fontStyle.className} font-medium text-[#f4f1e6] text-[1.2rem] my-4 p-4 w-[10rem]  rounded-full bg-[#5286e6] hover:bg-[#5480d3] transition-all duration-300`} type='submit'>Submit</button>
    </form>
  )
}

export default ContactUs


interface IUserInputs {
    name: string;
    email: string;
    message: string;
}

interface Contact {
    fontStyle: NextFont;
}