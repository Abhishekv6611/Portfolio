import React from 'react'
import {  motion } from 'framer-motion'
 
interface SkillsTypes{
    type:string
    src:string
    alt:string
}

function SkillCard() {
   const skills :SkillsTypes[] = [
       {
           type: 'img',
           src: 'https://www.abrilliants.com/wp-content/uploads/2023/05/1631110818-logo-react-js.png',
           alt: 'React.js'
       },
    {
        type: 'img',
        src: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png',
        alt: 'Next.js'
    },
    {
        type: 'img',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-mspyndicMBTk-KdKp96OZiaD2rkYLYzFQ&s',
        alt: 'TailwindCss'
    },
    {
        type: 'img',
        src: 'https://1000logos.net/wp-content/uploads/2024/09/Figma-Logo.png',
        alt: 'Figma'
    },
    {
        type: 'img',
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png',
        alt: 'Redux'
    },
    {
        type: 'img',
        src: 'https://www.edureka.co/blog/wp-content/uploads/2019/08/node-logo.png',
        alt: 'Node.js'
    },
    {
        type: 'image', // Use next/image for local images
        src: "https://res.cloudinary.com/practicaldev/image/fetch/s--MgAyrZbI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2AhYfdBkfKgvtMoDcqk_LjWA.png",
        alt: 'Express.js'
    },
    {
        type: 'img',
        src: 'https://www.developer-tech.com/wp-content/uploads/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg',
        alt: 'MongoDB'
    },
    {
        type: 'img',
        src: 'https://avatars.githubusercontent.com/u/18133?s=280&v=4',
        alt: 'git'
    },
    {
        type: 'img',
        src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        alt: 'GitHub'
    },
    {
        type: 'img',
        src: 'https://static-00.iconduck.com/assets.00/swagger-icon-2048x2048-563qbzey.png',
        alt: 'Swagger'
    },
    {
        type: 'img',
        src: 'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8',
        alt: 'Postman'
    },
    {
        type: 'img',
        src: 'https://yt3.googleusercontent.com/SrR4yedn6iaf431Y8ciCu6m_NTu0xqPyAYTps0WV0QgQO9NA2JUZDdJMg4435wI-wR8peEW59A=s900-c-k-c0x00ffffff-no-rj',
        alt: 'vscode'
    },
    {
        type: 'img',
        src: 'https://appexchange.salesforce.com/image_host/300c831a-4271-44f2-91da-b48269175229.png',
        alt: 'cludinary'
    },
    {
        type: 'img',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChlk8hEYeQQCKUinDZfWzulMsanwtxlSmpQ&s',
        alt: 'Vercel'
    },
    {
        type: 'img',
        src: 'https://mms.businesswire.com/media/20241112181390/en/2301437/22/Render_logo_-_Black.jpg',
        alt: 'Render'
    },
    {
        type: 'img',
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/2560px-Canva_Logo.svg.png',
        alt: 'Canva'
    },
    {
        type: 'img',
        src: 'https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg',
        alt: 'ChatGpt'
    }
]
    return (
        <>
            <h2 className='text-white text-4xl md:mt-20'>Skills</h2>
            <motion.div 
             initial={{ opacity: 0,y:20}}
             whileInView={{opacity:1,y:0}} 
                transition={{duration:0.8,ease:"easeOut"}}
            className='flex gap-2 flex-col md:grid  md:grid-cols-3 md:gap-20 mt-2 md:mt-10 mb-10 p-10'>
                
               { skills.map((skills,index)=>(
                <div key={index} className=' bg-[#D9D9D9] p-2 border hover:scale-105 duration-300'>
                    <img style={{  height: '200px',width:"100%",objectFit: 'contain', }} width={300} src={skills.src} alt={skills.alt} />
                </div>
               ))}
            </motion.div>
        </>
    )
}

export default SkillCard
