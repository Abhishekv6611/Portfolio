import React from 'react'
import Expressjs from '../../public/Expressjs.jpg'
import Image from 'next/image'
function SkillCard() {
    return (
        <>
            <h2 className='text-white text-4xl md:mt-20'>Skills</h2>
            <div className='flex flex-col md:flex-row mt-2 md:mt-10 mb-10 p-10'>
                <div className=' bg-[#D9D9D9] p-2 border hover:scale-105 duration-300'>
                    <img style={{ height: '200px' }} width={300} src={"https://www.abrilliants.com/wp-content/uploads/2023/05/1631110818-logo-react-js.png"} alt="" />
                </div>
                <div className=' bg-[#D9D9D9] p-2 border hover:scale-105 duration-300'>
                    <img style={{ height: '200px' }} width={300} src={"https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png"} alt="" />
                </div>
                <div className=' bg-[#D9D9D9] p-2 border hover:scale-105 duration-300'>
                    <img style={{ height: '200px' }} width={300} src={"https://www.developer-tech.com/wp-content/uploads/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg"} alt="" />
                </div>
                <div className='bg-[#D9D9D9] p-2 border hover:scale-105 duration-300'>
                    <img style={{ height: '200px' }} width={300} src={"https://www.edureka.co/blog/wp-content/uploads/2019/08/node-logo.png"} alt="" />
                </div>
                <div className='bg-[#D9D9D9] p-2 border hover:scale-105 duration-300'>
                    <Image style={{ height: '200px' }} width={300} src={Expressjs} alt="" />
                </div>

            </div>
        </>
    )
}

export default SkillCard
