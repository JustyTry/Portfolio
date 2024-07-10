import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header className="relative z-40 h-screen w-full">
      <div className="fixed isolate flex aspect-video h-20 w-full justify-center border-b bg-[#080808] bg-opacity-10 capitalize shadow-sm shadow-[#efefef] ring-1 ring-black/5 backdrop-blur-md">
        <ul className="grid w-8/12 grid-cols-2 items-center max-lg:w-full">
          <li className="w-full">{"</>AlexMAS"}</li>

          <li className="flex w-full justify-end">
            <ul className="flex gap-x-4">
              <li>
                <img src={telegram} alt="telegram" className="h-8 w-8 invert" />
              </li>
              <li>
                <img src={whatsapp} alt="whatsapp" className="h-8 w-8 invert" />
              </li>
              <li>
                <img src={linkedin} alt="linkedin" className="h-8 w-8 invert" />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex h-dvh flex-grow flex-col items-center justify-center gap-y-6 bg-[#080808] bg-fixed text-center shadow-xl [background-size:64px_64px]">
        <div className="absolute shadow-[0_0_2000px_75px_rgba(133,66,200,1)]"></div>
        <div className="absolute shadow-[330px_0_3000px_75px_rgba(1,244,200,1)]"></div>
        <div className="absolute shadow-[-330px_0_2000px_75px_rgba(244,1,200,1)]"></div>
        <h1 className="text-5xl text-white">Hello, I'm Alexander</h1>
        <h2 className="flex items-center justify-center text-3xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Frontend Developer").start();
            }}
          />
        </h2>
      </div>
    </header>
  );
};

export default Header;
