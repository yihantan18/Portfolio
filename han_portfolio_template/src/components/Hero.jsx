import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-between relative overflow-hidden bg-gradient-to-br from-[#0b1e3d] to-[#1b2e50] px-12"
    >
      {/* Text Content */}
      <div className="z-30 text-left ml-16 max-w-xl">
        <h1 className="text-6xl md:text-8xl font-bitcount text-white mb-6 drop-shadow-[4px_4px_10px_rgba(0,0,0,0.3)]">
          Hi, I'm Yi Han
        </h1>
        <p className="text-2xl md:text-3xl text-white font-bitcount">
          A passionate developer who builds sleek and functional web applications.
        </p>
      </div>

      {/* Moon + Clouds container */}
<div className="relative w-[65vh] h-[65vh] z-10">
  {/* Moon */}
  <div className="w-full h-full rounded-full bg-white shadow-xl relative">
    {/* Craters */}
    <div className="absolute top-[20%] left-[30%] w-16 h-16 bg-gray-200 opacity-30 rounded-full"></div>
    <div className="absolute top-[40%] left-[20%] w-24 h-24 bg-gray-200 opacity-20 rounded-full"></div>
    <div className="absolute top-[35%] left-[55%] w-10 h-10 bg-gray-200 opacity-25 rounded-full"></div>
  </div>

  {/* Clouds around moon */}
  <div className="absolute -left-20 top-[20%] flex gap-2">
    <div className="bg-blue-900 opacity-80 w-32 h-5 rounded-full blur-sm"></div>
    <div className="bg-blue-900 opacity-80 w-20 h-5 rounded-full blur-sm"></div>
  </div>

  <div className="absolute -right-24 bottom-[10%] flex gap-2">
    <div className="bg-blue-900 opacity-80 w-40 h-5 rounded-full blur-sm"></div>
    <div className="bg-blue-900 opacity-80 w-24 h-5 rounded-full blur-sm"></div>
  </div>

  <div className="absolute -bottom-10 left-[10%] flex gap-2">
    <div className="bg-blue-900 opacity-80 w-28 h-5 rounded-full blur-sm"></div>
    <div className="bg-blue-900 opacity-80 w-16 h-5 rounded-full blur-sm"></div>
  </div>
</div>


    </section>
  );
};

export default Hero;
