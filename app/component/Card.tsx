import Image from 'next/image'
import React from 'react'
import { TbExternalLink } from 'react-icons/tb'

interface ProjectsProps{
    title:string
    description:string
    link:string
  }

  interface CardProps{
    project:ProjectsProps
  }

const Card:React.FC<CardProps>=({project})=> {
  return (
    <>
        <div className='card  w-80 '>
            <div className=''>
       <Image className='hover:scale-105 duration-300 h-52' width={400} height={10} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"} alt=''/>
            </div>
       <div className='card-body p-5 bg-gray-400'>
        <span className='flex items-center'>
        <h2 className='text-2xl mt-1 pl-1'>{project.title}</h2>
        <a href={project.link}><TbExternalLink  className='ml-1'/></a>
        </span>
        <p>{project.description}</p>
       </div>
      </div>
    </>
  )
}

export default Card
