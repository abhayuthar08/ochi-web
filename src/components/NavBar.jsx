import React from 'react';

function NavBar() {
  return (
    <div className='fixed top-0 left-0 z-[999] w-full px-8 md:px-20 py-6 md:py-8 font-["Neue Montreal"] flex justify-between items-center bg-black bg-opacity-90 backdrop-blur-md border-b border-zinc-800 shadow-md'>

      {/* Logo */}
      <div className='text-3xl'>
        <h1>Ochi</h1>
      </div>

      {/* Links */}
      <div className='links flex flex-wrap gap-6 md:gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`relative text-white text-base md:text-lg font-light group transition duration-300 hover:text-lime-400 ${index === 4 ? "md:ml-40" : ""}`}
          >
            {item}
            {/* Underline Effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
