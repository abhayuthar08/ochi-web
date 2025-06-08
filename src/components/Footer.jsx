import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white px-[5vw] py-[4vw]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-zinc-700 pb-[2vw]">
        <h1 className="text-[5vw] lg:text-[3vw] font-semibold">Let's work together</h1>
        <button className="mt-4 lg:mt-0 bg-white text-black px-6 py-2 rounded-full text-[3vw] lg:text-[1vw] hover:bg-[#9ad622] transition duration-300">
          Get in Touch
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-[4vw] gap-[2vw] text-[3vw] lg:text-[1vw]">
        <div>
          <h3 className="mb-2 font-semibold text-zinc-400">Office</h3>
          <p>4th Floor, Galaxy Towers</p>
          <p>New York, NY 10001</p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-zinc-400">Contact</h3>
          <p>info@ochi.design</p>
          <p>+1 (123) 456-7890</p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-zinc-400">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#9ad622]">Instagram</a>
            <a href="#" className="hover:text-[#9ad622]">LinkedIn</a>
            <a href="#" className="hover:text-[#9ad622]">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-zinc-500 text-[2.5vw] lg:text-[0.9vw] mt-[3vw]">
        © {new Date().getFullYear()} Ochi Design. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
