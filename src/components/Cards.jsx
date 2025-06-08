import React from 'react'

function Cards() {
  return (
    <div className='text-black'>
        <h1 className='pt-[3vw] text-[4vw] px-[2vw]'>Featured Projects</h1>

        <div className='border-[1px] mt-[2vw]'></div>

        <div className='flex px-[5vw] mt-[5vw] gap-[1vw] rounded'> 
            <div>
            <div className='flex '><img src="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg" alt="" /></div>
               
            <div className='flex gap-5 mt-[1vw] '>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>AUDIT</h1>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>COPYWRITE</h1>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>SALES DECK</h1>
            <h1 className='border border-[1px] pl-[1vw] pr-[1vw] border-zinc-500 rounded-full align-middle justify-center'>SLIDES DESIGN</h1>
            </div>
            </div>

            <div>
            <div className=''><img src="https://i.pinimg.com/736x/db/38/84/db388461a59a36c505661cd25a2ed015.jpg"/></div>
            <div className='flex gap-5 mt-[1vw]'>
                <h1 className='border border-[1px] border-zinc-500 rounded-full align-middle justify-center pl-[1vw] pr-[1vw]'>AGENCY</h1>
            <h1 className='border border-[1px] border-zinc-500 rounded-full align-middle justify-center pl-[1vw] pr-[1vw]'>COMPANY PRESENTATION</h1></div>
            </div>
        </div>



        <div className='flex px-[5vw] mt-[5vw] gap-[1vw] rounded'> 
            <div>
            <div className='flex '><img src="https://i.pinimg.com/736x/54/45/71/5445710a1bbab0b6cb5632dc667d070a.jpg" alt="" /></div>
               
            <div className='flex gap-5 mt-[1vw] '>
            <h1 className='border border-[1px] border-zinc-500 pl-[1vw] pr-[1vw] rounded-full align-middle justify-center'>BRAND IDENTITY</h1>
            <h1 className='border border-[1px] border-zinc-500 pl-[1vw] pr-[1vw] rounded-full align-middle justify-center'>DESIGN RESEARCH</h1>
            <h1 className='border border-[1px] border-zinc-500 pl-[1vw] pr-[1vw] rounded-full align-middle justify-center'>INVESTOR DECK</h1>
            
            </div>
            </div>

            <div>
            <div className=''><img src="https://i.pinimg.com/736x/84/4b/a4/844ba45870609582bc36d7d741b71a10.jpg" alt="" /></div>
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