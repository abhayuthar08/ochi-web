import React from 'react';

function Reviews() {
  const reviewList = [
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
    { client: 'Planteny', reviewer: 'Nina Wannoch' },
  ];

  return (
    <div className="text-black px-[3vw] py-[4vw]">
      {/* Title */}
      <h1 className="text-[3vw] font-semibold mb-[2vw]">Client's Reviews</h1>

      {/* Top Divider */}
      <div className="border border-zinc-300 my-[2vw]" />

      {/* Top Review Summary */}
      <div className="flex justify-between items-center text-lg font-medium mb-[1vw]">
        <h3>Karman Ventures</h3>
        <h3>Services</h3>
        <h3>William Barnes</h3>
        <h3 className="text-blue-700 cursor-pointer">READ</h3>
      </div>

      {/* Highlighted Review */}
      <div className="flex flex-col lg:flex-row gap-[4vw] py-[3vw]">
        {/* Tags */}
        <div className="flex flex-col gap-[1vw] justify-center items-center">
          <span className="border border-zinc-500 rounded-full px-[1.5vw] py-[0.5vw] text-sm">
            BRAND IDENTITY
          </span>
          <span className="border border-zinc-500 rounded-full px-[1.5vw] py-[0.5vw] text-sm">
            BRAND STRATEGY
          </span>
        </div>

        {/* Image + Text */}
        <div className="flex flex-col items-center lg:flex-row gap-[2vw]">
          <img src="img5.png" alt="Reviewer" className="h-[10vw] w-[10vw] rounded-full object-cover" />
          <p className="max-w-[40vw] text-md text-zinc-700">
            They were transparent about the time and the stages of the project. The end product is
            high quality, and I feel confident about how they were handholding the client through
            the process. I feel like I can introduce them to someone who needs to put a sales deck
            together from scratch, and they would be able to handhold the client experience from 0
            to 100 very effectively from story to design. 5/5
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="border border-zinc-300 my-[2vw]" />

      {/* Multiple Client Reviews */}
      <div className="space-y-[1.5vw]">
        {reviewList.map((review, idx) => (
          <div key={idx} className="border-b border-zinc-300 py-[1vw] flex justify-between items-center">
            <h3>{review.client}</h3>
            <h3>{review.reviewer}</h3>
            <h3 className="text-blue-700 cursor-pointer">READ</h3>
          </div>
        ))}
      </div>

      {/* Ochi Cards Section */}
      <div className="flex flex-wrap justify-center gap-[2vw] mt-[5vw]">
        <div className="w-[28vw] h-[20vw] bg-[#38543a] rounded-md flex items-center justify-center text-[#9ad622] text-[3vw] font-bold shadow-md">
          Ochi
        </div>
        <div className="w-[28vw] h-[20vw] bg-[#3e3854] rounded-md flex items-center justify-center text-[#9ad622] text-[3vw] font-bold shadow-md">
          Ochi
        </div>
        <div className="w-[28vw] h-[20vw] bg-[#6d4b53] rounded-md flex items-center justify-center text-[#9ad622] text-[3vw] font-bold shadow-md">
          Ochi
        </div>
      </div>
    </div>
  );
}

export default Reviews;
