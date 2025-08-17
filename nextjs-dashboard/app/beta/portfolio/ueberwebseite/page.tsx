"use client";
import { isAuthenticated, login, logout } from "../../../lib/auth";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";

// ## ICONS ##
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const LiquidGlass = dynamic(() => import("../../../../@nkzw/liquid-glass"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();
  const [isSideNavClosed, setSideNavClosed] = useState(true);


  const menunav = (e: any) => {
    router.push(`/beta/${e.target.id}`);


  };


  const experienceref = useRef<HTMLDivElement>(null)
  const aboutref = useRef<HTMLDivElement>(null)
  const scrollToExperience = () => {
    if (experienceref.current) {
      experienceref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutref.current) {
      aboutref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [viewexperience, setViewExperience] = useState(false);
  const [viewabout, setViewAbout] = useState(false);
  

  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-login-dark to-portfolio-header flex flex-col">
      <div className="w-full mx-auto px-4 py-6 flex justify-center items-center shadow shadow-[#4f4f4f]">
        <div className="w-1/3">
          <button
            className="relative w-[34px] h-[34px] border border-[#4f4f4f] z-20 shadow shadow-[#4f4f4f] rounded-lg"
            onMouseEnter={() => setSideNavClosed(false)}
            onClick={() => setSideNavClosed(!isSideNavClosed)}
          >
            <MdOutlineMenu
              className={clsx(
                "absolute inset-0 m-auto transition-opacity duration-300",
                isSideNavClosed ? "opacity-100" : "opacity-0"
              )}
              size={30}
              color="#ffffff"
            />
            <IoClose
              className={clsx(
                "absolute inset-0 m-auto transition-opacity duration-300",
                isSideNavClosed ? "opacity-0" : "opacity-100"
              )}
              size={30}
              color="#ffffff"
            />
          </button>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <h1 className="text-2xl text-white select-none">Portfolio</h1>
        </div>
        <div className="w-1/3 flex justify-end items-center">

        </div>
      </div>
      <nav
        className={clsx(
          "fixed top-0 h-full w-full sm:w-64 bg-portfolio-header shadow-lg shadow-[#4f4f4f] z-10 text-white p-6 flex flex-col",
          "transition-all duration-300",
          isSideNavClosed ? "-translate-x-full shadow-none" : "shadow-lg"
        )}
        onMouseLeave={() => setSideNavClosed(true)}
      >
        <h1 className="text-2xl text-center font-inter font-normal">Menu</h1>
        <ul className="space-y-4 text-center">
          <li className="hover:bg-[#2e2e2e] font-inter font-extralight p-2 mt-4 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out select-none"
          onClick={(e) => menunav(e)}
          id="portfolio">
            Über Mich
          </li>
          <li
            className="hover:bg-[#2e2e2e] font-inter font-extralight p-2 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out select-none"
            id="portfolio/ueberwebseite"
            onClick={(e) => menunav(e)}
          >
            Über diese Webseite
          </li>
        </ul>
      </nav>

      <div className="w-full h-full flex flex-col gap-4 md:flex-row bg-gradient-to-tl overflow-scroll from-login-blue via-login-dark to-portfolio-header">
        <div className="w-full min-h-full md:w-1/2 flex flex-col justify-center overflow-auto items-center" ref={aboutref}>
          <LiquidGlass
            blurAmount={0.5}
            displacementScale={100}
            saturation={100}
            aberrationIntensity={0}
            borderRadius={16}
            elasticity={0.0}
            mode="standard"
            height={0.9}
            width={0.9}
            customSize={true}
          >
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-1/5 flex flex-col justify-center">
                <p className="text-[#4562E6] text-2xl md:text-4xl underline decoration-[#4562E6] underline-offset-4 font-inter font-normal select-none">
                  Über Diese Webseite
                </p>
              </div>
              <div className="w-full min-h-[60%] md:h-[45%] overflow-auto">
                <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                  Diese Webseite habe ich innerhalb von einem Monat
                  programmiert. Ich musste mir zuerst die Grundlagen von Next.js
                  und React aneignen, bevor ich mit dem Programmieren dieser
                  Webseite beginnen konnte. Ich habe mich entschieden, Next.js
                  zu verwenden, da es eine sehr gute Performance hat und es mir
                  ermöglicht, eine statische Webseite zu erstellen. Mit tailwind
                  konnte ich das Design der Webseite sehr einfach und schnell
                  umsetzen. Ich habe auch versucht, die Webseite so barrierefrei
                  wie möglich zu gestalten. Während dem Programmieren habe ich
                  sehr viel neues gelernt und ich bin sehr stolz auf das
                  Ergebnis. Die Webseite könnte noch weiter verbessert werden,
                  aber ich denke, dass sie für den Anfang sehr gut gelungen ist.
                  Diese Webseite ist statisch und wurde mit Github Pages
                  deployed.
                </p>
              </div>
            </div>
          </LiquidGlass>
          <IoIosArrowDown size={40} color="ffffff" className={clsx(
                          "mt-4 cursor-pointer transition-all duration-300",
                          "block md:hidden",
                          viewexperience ? "opacity-0" : "opacity-100"
                        )} onClick={() => {
                          setViewExperience(!viewexperience);
                          scrollToExperience();
                        }}/>
        </div>
        <div className="w-full min-h-full md:w-1/2 flex flex-col justify-center items-center" ref={experienceref}>
         <IoIosArrowUp size={40} color="ffffff" className={clsx(
                        "cursor-pointer transition-transform duration-300",
                        "block md:hidden",
                        viewexperience ? "opacity-100" : "opacity-0"
                      )} onClick={() => {
                        setViewExperience(!viewexperience);
                        scrollToAbout();
                      }}/>
          <LiquidGlass
            blurAmount={0.5}
            displacementScale={100}
            saturation={100}
            aberrationIntensity={0}
            borderRadius={16}
            elasticity={0.0}
            mode="standard"
            height={0.9}
            width={0.9}
            customSize={true}
          >
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-1/5 flex flex-col justify-center">
                <span className="font-inter font-normal underline underline-offset-4 decoration-[#4562E6] text-[#4562E6] text-2xl md:text-4xl select-none">
                  Zusätzliche Informationen
                </span>
              </div>
              <div className="w-full h-[30%] md:h-[15%] ">
                <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                  Diese Webseite hat auch eine Login-Funktion, die es
                  ermöglicht, die Informationen über mich zu schützen. Jedoch
                  finde ich das nicht notwendig. Der Zugangscode ist
                  "ACCESS2025". Mit dem Knopf unten geht es zurück zur
                  Login-Seite.
                </p>
              </div>
              <div className="w-full h-1/5 flex justify-center items-center">
                <Link
                  href="/beta/login"
                  className="text-white text-lg font-inter font-extralight backdrop-blur bg-opacity-30 border-2 p-3 hover:border-blue-500 transition-colors duration-150 border-white rounded-lg select-none"
                >
                  Gehe zur Login-Seite
                </Link>
              </div>
              <div className="w-full h-1/5 flex justify-center items-center">
                <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                  Diese Webseite wurde mit Next.js, React, Tailwind CSS und
                  TypeScript entwickelt. Diese Webseite ist open-source und der
                  Quellcode ist auf GitHub verfügbar.
                </p>
              </div>
              <div className="w-full h-1/5 flex justify-center items-center">
                <Link
                  href="https://github.com/FF-website/Website"
                  className="text-white text-lg flex flex-colfont-inter font-extralight backdrop-blur bg-opacity-30 border-2 p-3 hover:border-blue-500 transition-colors duration-150 border-white rounded-lg select-none"
                >
                  <FaGithub size={30} className="mr-3" />
                  Gehe zum Quellcode
                </Link>
              </div>
            </div>
          </LiquidGlass>
        </div>
      </div>
    </div>
  );
}
