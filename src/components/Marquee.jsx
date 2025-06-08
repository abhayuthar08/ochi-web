import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
      <motion.div
        className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap'
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
      >
        <h1 className='text-[22vw] font-bold leading-none pt-2 -mt-[4vw] -mb-[1vw] tracking-tighter'>WE ARE OCHI</h1>
        <h1 className='text-[22vw] font-bold leading-none pt-2 -mt-[4vw] -mb-[1vw] tracking-tighter'>WE ARE OCHI</h1>
      </motion.div>
    </div>
  );
}

export default Marquee;
