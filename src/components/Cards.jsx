import React from 'react'

function Cards() {
  return (
    <div className='text-black'>
        <h1 className='pt-[3vw] text-[4vw] px-[2vw]'>Featured Projects</h1>

        <div className='border-[1px] mt-[2vw]'></div>

        <div className='flex px-[5vw] mt-[5vw] gap-[1vw] rounded'> 
            <div>
            <div className='flex '><img src="img1.png" alt="" /></div>
               
            <div className='flex gap-5 mt-[1vw] '>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>AUDIT</h1>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>COPYWRITE</h1>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>SALES DECK</h1>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>SLIDES DESIGN</h1>
            </div>
            </div>

            <div>
            <div className=''><img src="img2.jpg" alt="" /></div>
            <div className='flex gap-5 mt-[1vw]'>
                <h1 className='border border-[1px] border-zinc-500 rounded-full align-middle justify-center pl-[1vw] pr-[1vw]'>AGENCY</h1>
            <h1 className='border border-[1px] border-zinc-500 rounded-full align-middle justify-center pl-[1vw] pr-[1vw]'>COMPANY PRESENTATION</h1></div>
            </div>
        </div>



        <div className='flex px-[5vw] mt-[5vw] gap-[1vw] rounded'> 
            <div>
            <div className='flex '><img src="img3.jpg" alt="" /></div>
               
            <div className='flex gap-5 mt-[1vw] '>
            <h1 className='border border-[1px] border-zinc-500 pl-[1vw] pr-[1vw] rounded-full align-middle justify-center'>BRAND IDENTITY</h1>
            <h1 className='border border-[1px] border-zinc-500 pl-[1vw] pr-[1vw] rounded-full align-middle justify-center'>DESIGN RESEARCH</h1>
            <h1 className='border border-[1px] border-zinc-500 pl-[1vw] pr-[1vw] rounded-full align-middle justify-center'>INVESTOR DECK</h1>
            
            </div>
            </div>

            <div>
            <div className=''><img src="img4.png" alt="" /></div>
            <div className='flex gap-5 mt-[1vw]'>
                <h1 className='border border-[1px] border-zinc-500 rounded-full align-middle justify-center pl-[1vw] pr-[1vw]'>BRAND TEMPLATE</h1>
            </div>
            </div>
        </div>
        <h1 className= ' inline-block bg-black text-white mt-[5vw] justify-centre align-centre px-[4vw] mx-[40vw] text-[1vw] rounded-full pt-[1vw] pb-[1vw]'>VIWE ALL CASE STUDIES</h1>
    </div>
  )
}

export default Cards