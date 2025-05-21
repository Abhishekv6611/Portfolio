import React from 'react'
import Card from './Card'
import EStore from '../../public/EStore.png'
import Bloggin from '../../public/Bloggin.png'
import MusicApp from '../../public/MusicApp.png'
import ChatApp from '../../public/ChatApp.png'
import Diet from '../../public/Ai-diet.png'


function Projects() {

  const Data=[
    {
      id:5,
      title:' AI-Powered Diet Planner for Pregnant Womens',
      description:'Built and deployed a responsive web app that generates personalized diet plans using OpenAI, tailored to the user’s pregnancy stage. Integrated user authentication with Clerk for a secure and seamless login experienc',
      link:'https://mealgorithm.vercel.app/',
      image:Diet
    },
  {
      id:2,
      title:'Blogging Site',
      description:"Developed a secure authentication web app using the MERN stack, featuring user registration login forgot password and reset password functionalities. Integrated Jwt authentication for seamless user management and implemented Gmail SMTP (Nodemailer) for password recovery.",
      link:' https://lazythoughts-client.vercel.app/',
      image:Bloggin
    },  {
      id:1,
      title:'E-Store',
      description:'Developed a fully functional e-commerce store using Open API for product data and implemented Redux for state management, including cart and wishlist functionalities.Ensured a responsive and user-friendly UI with efficient API handling',
      link:'https://react-store-eight-topaz.vercel.app/',
      image:EStore
    },{
      id:3,
      title:'Music Player',
      description:'Designed and developed a dynamic music app using React.js for the frontend and JSON-server as the backend. The app allows users to upload and manage YouTube URLs, song names, and video links efficiently. Integrated Axios for seamless communication between the client and server,ensuring smooth data handling and a user-friendly experience',
      link:' https://music-player-app-jet.vercel.app/',
      image:MusicApp
    },{
      id:4,
      title:'Chat App',
      description:'Developed a responsive real-time chat application using the MERN stack. The application allows users to securely register, log in, and engage in real-time conversations with other users.Built with React.js and styled using Tailwind CSS for a modern and responsive user interface.Backend Developed using Node.js and Express.js for server-side logic',
      link:' https://chatapp-eomm.onrender.com/',
      image:ChatApp
    },
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
