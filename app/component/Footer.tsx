import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='flex flex-col mt-2  justify-center items-center'>
         <div className='flex gap-10 mb-2'>
        <a href="https://www.linkedin.com/in/abhishek-v-4841a9242/"><FaLinkedin size={20} /></a> 
        <a href="https://github.com/Abhishekv6611"> <FaGithub size={20} /></a>
         <a href="https://stackoverflow.com/users/21054620/abhishek-v"><FaStackOverflow  size={20} /></a>
         </div>
         <p className='text-white'>Built with ❤️ and ☕!</p>
         
      </div>
    </>
  )
}

export default Footer
