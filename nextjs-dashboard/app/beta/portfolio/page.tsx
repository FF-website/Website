"use client";
import { isAuthenticated, login, logout } from "../../lib/auth";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

import dynamic from "next/dynamic";

// ## ICONS ##
import { SiLua } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const LiquidGlass = dynamic(() => import("@nkzw/liquid-glass"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();
  const [isSideNavClosed, setSideNavClosed] = useState(true);

  const menunav = (e: any) => {
    router.push(`portfolio/${e.target.id}`);
  };

  const experienceref = useRef<HTMLDivElement>(null);
  const aboutref = useRef<HTMLDivElement>(null);
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
        <div className="w-1/3 flex justify-end items-center"></div>
      </div>
      <nav
        className={clsx(
          "fixed top-0 h-full w-full sm:w-64 bg-portfolio-header shadow-lg shadow-[#4f4f4f] z-10 text-white p-6 flex flex-col",
          "transition-all duration-300",
          isSideNavClosed ? "-translate-x-full shadow-none" : "shadow-lg"
        )}
        onMouseLeave={() => setSideNavClosed(true)}
      >
        <h1 className="text-2xl text-center font-inter font-normal select-none">
          Menu
        </h1>
        <ul className="space-y-4 text-center">
          <li className="hover:bg-[#2e2e2e] font-inter font-extralight p-2 mt-4 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out select-none">
            Über Mich
          </li>
          <li
            className="hover:bg-[#2e2e2e] font-inter font-extralight p-2 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out select-none"
            id="ueberwebseite"
            onClick={(e) => menunav(e)}
          >
            Über diese Webseite
          </li>
        </ul>
      </nav>

      <div className="w-full h-full flex flex-col gap-4 md:flex-row bg-gradient-to-tl overflow-scroll from-login-blue via-login-dark to-portfolio-header">
        <div
          className="w-full md:w-1/2 min-h-full flex flex-col justify-center items-center "
          ref={aboutref}
        >
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
            style={{}}
          >
            <div className="flex flex-col justify-center">
              <div>
                <img
                  src="../img/NeuesProjekt.png"
                  className="select-none w-28 h-28 md:h-56 md:w-56 mt-6 rounded-full shadow-md shadow-[#4562E6]"
                />
              </div>

              <div className="flex-col">
                <div className="w-full h-1/5">
                  <p className="text-xl text-[#4562E6] md:text-4xl font-inter font-normal select-none">
                    Flondrit Fazlijevic
                  </p>
                </div>

                <div className="w-full h-full flex">
                  <div className="w-1/2 h-full flex flex-col gap-2">
                    <p className="text-white text-base md:text-lg font-inter font-extralight md:font-normal select-none">
                      Alter:
                    </p>
                    <p className="text-white text-base md:text-lg font-inter font-extralight md:font-normal select-none">
                      Geburtsdatum:
                    </p>
                    <p className="text-white text-base md:text-lg font-inter font-extralight md:font-normal select-none">
                      Nationalitäten:
                    </p>
                    <p className="text-white text-base md:text-lg font-inter font-extralight md:font-normal select-none">
                      Hobbies:
                    </p>
                    <p className="text-white text-lg md:text-2xl font-inter font-extralight md:font-normal underline underline-offset-4 select-none">
                      Über Mich:
                    </p>
                  </div>
                  <div className="w-1/2 h-full flex flex-col gap-2">
                    <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                      15 Jahre
                    </p>
                    <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                      7. August 2010
                    </p>
                    <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                      Schweiz, Kosovo
                    </p>
                    <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                      Fussball, Basketball, Programmieren, Gamen
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <p className="text-white text-base md:text-lg font-inter font-extralight select-none">
                  Ich bin Flondrit Fazlijevic, 15 Jahre alt und komme aus dem
                  Kosovo. Ich bin in der Schweiz geboren, aber meine Eltern
                  kommen aus dem Kosovo. Meine Leidenschaft ist das
                  Programmieren. Gerne lerne ich neue Porgrammiersprachen und
                  arbeite in Gruppenprojekten mit. Die erste Programmiersprache
                  die ich gelernt habe, war Javascript. Die Programmiersprache
                  schien mir am einfachsten zu sein, deswegen habe ich mich für
                  diese entschieden. Ich habe dies erreicht, indem ich Tutorials
                  auf YouTube geschaut habe und dokumentationen gelesen habe.
                  Jetzt lerne ich HTML und CSS mit next.js und tailwindcss.
                </p>
              </div>
            </div>
          </LiquidGlass>
          <IoIosArrowDown
            size={40}
            color="ffffff"
            className={clsx(
              "mt-4 cursor-pointer transition-transform duration-300",
              "block md:hidden",
              viewexperience ? "opacity-0" : "opacity-100"
            )}
            onClick={() => {
              setViewExperience(!viewexperience);
              scrollToExperience();
            }}
          />
        </div>

        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center min-h-full"
          ref={experienceref}
        >
          <IoIosArrowUp
            size={40}
            color="ffffff"
            className={clsx(
              "cursor-pointer transition-transform duration-300",
              "block md:hidden",
              viewexperience ? "opacity-100" : "opacity-0"
            )}
            onClick={() => {
              setViewExperience(!viewexperience);
              scrollToAbout();
            }}
          />

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
            <p className="md:text-4xl text-2xl mt-2 text-center font-inter font-normal text-white underline select-none">
              Erfahrungen
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <IoLogoJavascript className="mt-6" size={80} color="#fcba03" />
                <span className="mt-6 ml-6 text-2xl font-inter font-extralight select-none">
                  Javascript(Gute Kenntnisse)
                </span>
              </li>
              <li className="flex items-center">
                <SiLua className="mt-6" size={80} color="#0055ff" />
                <span className="mt-6 ml-6 text-2xl font-inter font-extralight select-none">
                  Lua(Gute Kenntnisse)
                </span>
              </li>
              <li className="flex items-center">
                <FaPython className="mt-6" size={80} color="#0263a8" />
                <span className="mt-6 ml-6 text-2xl font-inter font-extralight select-none">
                  Python(Grundkenntnisse)
                </span>
              </li>
              <li className="flex items-center">
                <FaHtml5 className="mt-6" size={80} color="#ff6f00" />
                <span className="mt-6 ml-6 text-2xl font-inter font-extralight select-none">
                  HTML(Grundkenntnisse)
                </span>
              </li>
              <li className="flex items-center">
                <FaCss3Alt className="mt-6" size={80} color="#0384fc" />
                <span className="mt-6 ml-6 text-2xl font-inter font-extralight select-none">
                  CSS(Grundkenntnisse)
                </span>
              </li>
            </ul>
          </LiquidGlass>
        </div>
      </div>
    </div>
  );
}
