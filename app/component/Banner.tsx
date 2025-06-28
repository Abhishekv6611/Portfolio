'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import abhishek from '../../public/abhishek.png'
import gsap from 'gsap'

function Banner() {

  const nameRef=useRef<HTMLSpanElement>(null)
  const nameRefB=useRef<HTMLSpanElement>(null)
  const nameRefH=useRef<HTMLSpanElement>(null)
  const nameRefI=useRef<HTMLSpanElement>(null)
  const nameRefS=useRef<HTMLSpanElement>(null)
  const nameRefHto=useRef<HTMLSpanElement>(null)
  const nameRefE=useRef<HTMLSpanElement>(null)
  const nameRefK=useRef<HTMLSpanElement>(null)

  useEffect(()=>{
    // A
 if(nameRef.current){
  gsap.from(nameRef.current,{
     x: -500,  
  })
 }
 if(nameRef.current){
  gsap.to(nameRef.current,{
     x: 0,  
    duration:1,
    delay:1,
    rotate:360
  })

}
  // B
   if(nameRefB.current){
  gsap.from(nameRefB.current,{
     y: -500,  
  })
 }
 if(nameRefB.current){
  gsap.to(nameRefB.current,{
     y: 0,  
    duration:1,
    delay:1,
    rotate:360
  })}
  // h
  if(nameRefH.current){
  gsap.from(nameRefH.current,{
     x: 2500,  
  })
 }
 if(nameRefH.current){
  gsap.to(nameRefH.current,{
     x: 0,  
    duration:1,
    delay:1,
    rotate:360
  })}
  // i
   if(nameRefI.current){
  gsap.from(nameRefI.current,{
     x: 2500,
     y:2000  
  })
 }
 if(nameRefI.current){
  gsap.to(nameRefI.current,{
     x: 0, 
     y:0, 
    duration:1,
    delay:1,
    rotate:360
  })}
// s
 if(nameRefS.current){
  gsap.from(nameRefS.current,{
     x: 2000,
     y:3000  
  })
 }
 if(nameRefS.current){
  gsap.to(nameRefS.current,{
     x: 0, 
     y:0, 
    duration:1,
    delay:1,
    rotate:360
  })}
  // h
  if(nameRefHto.current){
  gsap.from(nameRefHto.current,{
     x: 2000,
     y:6000  
  })
 }
 if(nameRefHto.current){
  gsap.to(nameRefHto.current,{
     x: 0, 
     y:0, 
    duration:1,
    delay:1,
    rotate:360
  })}
// e
 if(nameRefE.current){
  gsap.from(nameRefE.current,{
     y:-2000  ,
     x:200
  })
 }
 if(nameRefE.current){
  gsap.to(nameRefE.current,{ 
     y:0, 
     x:0,
    duration:1,
    delay:1,
    rotate:360
  })}
// k
 if(nameRefK.current){
  gsap.from(nameRefK.current,{
     y:8000  
  })
 }
 if(nameRefK.current){
  gsap.to(nameRefK.current,{
     y:0, 
    duration:1,
    delay:1,
    rotate:360
  })}
  },[])

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
                <h2 className='text-2xl'>
                  <span ref={nameRef} className='text-3xl inline-block'>A</span>
                  <span ref={nameRefB} className='inline-block'>B</span>
                  <span className='inline-block' ref={nameRefH}>H</span>
                  <span ref={nameRefI} className='inline-block'>I</span>
                  <span ref={nameRefS} className='inline-block'>S</span>
                  <span ref={nameRefHto} className='inline-block'>H</span>
                  <span ref={nameRefE} className='inline-block'>E</span>
                  <span ref={nameRefK} className='inline-block'>K</span>
                  </h2>
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
