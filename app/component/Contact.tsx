import React from 'react'

function Conatct() {
  return (
    <>
    <h2 className='text-white text-4xl md:mt-20'>Projects</h2>
    <div className='bg-gray-400 mt-10' style={{height: '100vh', width: '90%'}}>
      <div className='flex  justify-center items-center py-4 bg-[#f9cdaa] ml-2 mr-2 mt-2'>
      <h2 className='text-black text-3xl '>Contact Me</h2>
      </div>
     <div className='flex flex-col md:flex-row justify-evenly items-center mt-10 w-full'>
        <div className='flex- flex-col md:w-1/2 text-lg md:text-2xl' >
          <span className='flex items-center mb-10'> <h2>Main Name :</h2> <input type="text" className='bg-white border p-2 ml-1' /></span> 
          <span className='flex items-center mb-10 ml-6'> <h2>Email : </h2> <input type="text" className='bg-white border p-2 ml-1' /></span>
          <span className="flex items-center mb-10 ml-4">
              <h2>Human ?</h2>
              <select className="bg-white border p-2 ml-1">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </span>       
             </div>
        <div className='md:w-1/4 md:-ml-90   md:mt-0 '>
        <span className='flex flex-col'>
        <h2 className='text-2xl'> Message</h2> 
        <textarea name="" id="" className='bg-white p-3' rows={10} cols={40}></textarea>
        <div className='-mt-25 ml-52 md:ml-0 md:mt-0'>
        <button className='ml-10 mt-10 border bg-[#0C3DFB] max-w-30 p-3 hover:bg-blue-600 text-white border-blue-700 text-2xl'>Send</button>
        </div>
        </span>
        </div>
     </div>
    </div>
    </>
  )
}

export default Conatct
