import React from 'react'

function Marquee() {
  return (
    <div className='w-full  py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text   border-t-2  border-b-2  border-zinc-300 gap-10 flex overflow-hidden whitespace-nowrap'>
            <h1 className='text-[22vw] font-bold  leading-none pt-2  -mt-[4vw] -mb-[1vw] tracking-tighter'>WE ARE OCHI</h1>
            <h1 className='text-[22vw] font-semibold leading-none pt-2 -mt-[4vw] -mb-[1vw] tracking-tighter'>WE ARE OCHI</h1>
        </div>
    </div>
  )
}

export default Marquee