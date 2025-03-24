import React from 'react'
import Card from './Card'



function Projects() {

  const Data=[
    {
      id:1,
      title:'E-Store',
      description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:'https://react-store-eight-topaz.vercel.app/'
    },{
      id:2,
      title:'BLOGGING site',
      description:'loream ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:' https://lazythoughts-client.vercel.app/   '
    },{
      id:3,
      title:'BLOGGING site',
      description:'loream ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:' https://lazythoughts-client.vercel.app/   '
    },{
      id:4,
      title:'BLOGGING site',
      description:'loream ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum debitis adipisci, odio minus ipsum suscipit molestiae ipsam hic ex fuga consequatur sit, illum nostrum enim harum perferendis. Veniam, incidunt.',
      link:' https://lazythoughts-client.vercel.app/   '
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
