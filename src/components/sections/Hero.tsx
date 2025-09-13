'use client';

import { Menu } from '../Menu';

export default function Hero() {
  return (
    <section id="inicio" className="h-screen flex items-baseline mt-20 justify-baseline px-4 ">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl mb-6 text-[#1CCEBF] leading-relaxed">
          Hi, I&apos;m <span className="text-white">Santiago Ojeda</span>
          </h1>
          <p className="text-5xl md:text-9xl font-extrabold mb-8 text-[#1CCEBF] w-full md:leading-[0.7]">
            {"<FRONTEND DEVELOPER/>"}
          </p>
          <div className="flex gap-4 justify-center w-[100%] p-20">
            <Menu />
          </div>
        </div>
      </div>
    </section>
  );
} 