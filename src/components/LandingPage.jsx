import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-4">
      <div className="textstructure mt-[15vw] px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit hover:scale-[1.1] ease-linear duration-300 cursor-pointer flex items-end overflow-hidden">
                {index === 1 && (
                  <div className='mr-[1vw] w-[8vw] h-[5vw] bg-[url("https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] rounded bg-cover'></div>
                )}
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-["Arial   "] font-bold'>
                  {item}
                </h1>{" "}
              </div>
            </div>
          );
        })}

        <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
          {[
            "for public and private companies",
            "from the first pitch to IPO",
          ].map((item, index) => (
            <p className=" hover:scale-[1.3] ease-linear duration-300 text-md font-light tracking-tight leading-none">
              {item}
            </p>
          ))}

          <div className="start flex items-center gap-5">
            <div className="px-5 hover:scale-[1.1] ease-linear duration-300 cursor-pointer text-zinc-200 py-2 border-[2px] hover:bg-blend-color-dodge border-zinc-200 font-light flex gap-3">
              Start the project
              <div className="w-5 h-6 justify-center items-center  rounded-full border-[2px] border-zinc-200 ">
                <span className="rotate-[90deg]  justify-center items-centre">
                  <FaArrowUpLong />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage