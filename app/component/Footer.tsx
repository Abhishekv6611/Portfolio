import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className='flex flex-col mt-2  justify-center items-center'>
         <div className='flex gap-10 mb-2'>
        <a href=""><FaLinkedin size={20} /></a> 
        <a href=""> <FaGithub size={20} /></a>
         <a href=""><FaSquareInstagram size={20} /></a>
         </div>
         <p className='text-white'>Built with ❤️ and ☕!</p>
         
      </div>
    </>
  )
}

export default Footer
