'use client'
import Image from 'next/image'
import React from 'react'
import abhishek from '../../public/abhishek.png'
function Banner() {
  return (
    <>
    <div className="md:w-1/5 flex flex-col md:flex-row w-full items-center mb-10">
    <div className='flex flex-col text-white'>
    <div className="relative flex justify-center items-center group">
  {/* Background Box */}
  <div className="bg-white block md:max-w-xl px-35 py-37  absolute ml-5  transition-transform duration-300 ease-in-out group-hover:scale-75"></div>

  {/* Image */}
  <Image 
    width={300} 
    height={50} 
    src={abhishek} 
    alt="abhishek.jpg" 
    className="relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-102"
  />
</div>

              <div className='text-center mt-2'>
                <h2 className='text-2xl'>Abhishek</h2>
                <h3 className='text-xl'>Full stack developer</h3>
                <span className='ml-13 flex flex-row'>Email : <p className='ml-1'>abhishekv6611@gmail.com</p></span>
              </div>
    </div>
        </div>
        <div className="w-10/12 md:w-1/2 bg-[#D9D9D9] md:-mt-20 ">
            <div className='p-2 text-xl '>
              <div className='md:flex md:justify-between'>
               <h2 className='text-center'>Abhishek v</h2>
               <h2 className='hidden md:block'>(505) 333-754</h2>
              </div>
             <hr />
             <hr />
             <p >Self taught Mern stack developer based in Palakkad,kerala, curious to learn more about
 developing Scalable distributed systems,loves problem solving ❤️ and cares about writing readable
 as well as maintainable code.
             </p>
            </div>
        </div> 
    </>
  )
}

export default Banner
