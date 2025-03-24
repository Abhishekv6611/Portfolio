import React from 'react'
import Card from './Card'
import EStore from '../../public/EStore.png'
import Bloggin from '../../public/Bloggin.png'
import MusicApp from '../../public/MusicApp.png'
import ChatApp from '../../public/ChatApp.png'


function Projects() {

  const Data=[
    {
      id:1,
      title:'E-Store',
      description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:'https://react-store-eight-topaz.vercel.app/',
      image:EStore
    },{
      id:2,
      title:'Blogging Site',
      description:'loream ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:' https://lazythoughts-client.vercel.app/',
      image:Bloggin
    },{
      id:3,
      title:'Music Player',
      description:'loream ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:' https://music-player-app-jet.vercel.app/',
      image:MusicApp
    },{
      id:4,
      title:'Chat App',
      description:'loream ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:' https://chatapp-eomm.onrender.com/',
      image:ChatApp
    }
  ]

  return (
    <>
    <h2 className='text-white text-4xl md:mt-20'>Projects</h2>
    <div className='flex flex-col md:grid  md:grid-cols-2 md:gap-50 md:mt-10 gap-10 p-10 justify-center items-center '>
    {
      Data.map((project)=>{
        return(
          <Card key={project.id} project={project}/>
        )
      })
    }
    </div>
 
     
     
    </>
  )
}

export default Projects
