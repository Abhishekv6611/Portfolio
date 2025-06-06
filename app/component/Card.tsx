import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { TbExternalLink } from 'react-icons/tb'
import {motion} from 'framer-motion'
interface ProjectsProps{
    id:number
    title:string
    description:string
    link:string
    image:StaticImageData

  }

  interface CardProps{
    project:ProjectsProps
  }

const Card:React.FC<CardProps>=({project})=> {
  return (
    <>
<motion.div
 initial={{opacity:0,y:20}}
 whileInView={{opacity:1,y:0}}
 transition={{duration:0.3,delay:project.id*0.1,ease:'easeOut'}}

className='card w-90 '>
<div className=''>
       <Image className='hover:scale-105 duration-300 h-52' width={400} height={10} src={project.image} alt=''/>
            </div>
       <div className='card-body p-5 bg-gray-400'>
        <span className='flex items-center'>
        <h2 className='text-2xl mt-1 pl-1'>{project.title}</h2>
        <a href={project.link}><TbExternalLink size={20} className='ml-1'/></a>
        </span>
        <p>{project.description}</p>
       </div>
      </motion.div>
    </>
  )
}

export default Card
