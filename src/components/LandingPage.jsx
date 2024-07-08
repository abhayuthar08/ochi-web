import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-4'>
        <div className='textstructure mt-[15vw] px-20'>
            {["We Create","Eye Opening","Presentations"].map((item,index) => {
                return <div className='masker '>
                  <div className='w-fit flex items-end overflow-hidden'>

                    {index === 1 && (
                      <div className='mr-[1vw] w-[8vw] h-[5vw] bg-[url("content-image01.jpg")] rounded bg-cover'>
                        </div>
                    )}
              
                  
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-["Arial   "] font-bold'> 
                {item}</h1>  </div></div>
            })}
            

            <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
              {["for public and private companies","from the first pitch to IPO"].map((item,index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
              
              <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-200 font-light flex gap-3'>Start the project 
                <div className='w-5 h-6 justify-center items-center  rounded-full border-[2px] border-zinc-200 '><span className='rotate-[90deg]  justify-center items-centre'><FaArrowUpLong/> </span>
                </div>
                
                </div>
              </div>
            </div>
          
            
            

             

             
            </div>
        
    </div>
  )
}

export default LandingPage