import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Header = () => {

  return (
    <header className="w-full h-screen">
     
      <div className="h-20 isolate bg-[#080808] shadow-[#efefef] bg-opacity-10 border-b ring-black/5  aspect-video shadow-sm ring-1 backdrop-blur-md w-full text-green-500 capitalize flex justify-center fixed">
        <ul className="w-8/12 grid grid-cols-2 items-center">
          <li className="w-full">{">_AlexMAS"}</li>

          <li className="w-full flex justify-end">
            <ul className="flex gap-x-4">
              <li>
                <img src={telegram} alt="telegram" className="w-8 h-8 invert" />
              </li>
              <li>
                <img src={whatsapp} alt="whatsapp" className="w-8 h-8 invert" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin" className="w-8 h-8 invert" />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="h-dvh bg-fixed bg-[#080808] shadow-xl [background-size:64px_64px] flex flex-col justify-center gap-y-6 items-center">
        <div className="absolute shadow-[0_0_2000px_75px_rgba(133,66,200,1)]"></div>
        <div className="absolute shadow-[330px_0_3000px_75px_rgba(1,244,200,1)]"></div>
        <div className="absolute shadow-[-330px_0_2000px_75px_rgba(244,1,200,1)]"></div>
        <h1 className="text-5xl text-white ">Hello, I'm Alexander </h1>
        <h2 className="flex justify-center items-center text-3xl">
          Frontend Developer
        </h2>
      </div>
    </header>
  );
};

export default Header;
