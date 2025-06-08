import React from 'react'

function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl  text-black rounded-tr-3xl'>
      <h1 className='font-["Neue_Montreal"] text-[4vw]  px-10 py-20 w-[85vw] leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className='border-[1px]  border-zinc-100'></div>


      <div className='w-full h-[30vw] flex py-20 '>

        <div className='w-[45vw] ml-[4vw]'>What you can expect?</div>

        <div className='w-[24vw]'> <p>
We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
<p className='pt-[3vw]'>
We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p></div>

<div className='w-[20vw] pt-[5vw] pr-[9vw] align-centre justify-center pl-[7vw] pt-[2vw]'>S:
<h3>Instagram</h3>
<h3>Behance</h3>
<h3>Facebok</h3>
<h3>Linkedin</h3>
</div>

      </div>
      <div className='border-[1px] border-zinc-100 '></div>
      <div className='flex  mt-[3vw] px-[2vw] justify-between'>
        <div >
          <h1 className='text-[4vw]'>Our Approaches:</h1>
          <h3 className='pt-[1vw] mt-[1vw] mb-[1vw] border-[1px] border-zinc-100 rounded-full align-centre justify-center text-[1.5vw] bg-black text-white pt-[0.4vw] pb-[1.3vw] pl-[10vw] '>READ ME:</h3>
        </div>

        <div>
          <img className='h-[35vw] w-[45vw] rounded pr-[2vw] ' src='https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
        </div>
      </div>

      

  
    </div>
  )
}

export default About