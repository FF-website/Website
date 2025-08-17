"use client";
import { isAuthenticated, login, logout } from "../../../lib/auth";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";

// ## ICONS ##
import { SiLua } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const LiquidGlass = dynamic(() => import("../../../../@nkzw/liquid-glass"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  });

  const menunav = (e: any) => {
    router.push(`portfolio/${e.target.id}`);
  };



  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-login-dark to-portfolio-header flex flex-col">
      <div className="w-full mx-auto px-4 py-6 flex justify-center items-center shadow shadow-[#4f4f4f]">
        <button
          className="relative w-[34px] h-[34px] border border-[#4f4f4f] z-20 shadow shadow-[#4f4f4f] rounded-lg"
          onMouseEnter={() => setSideNavOpen(false)}
          onClick={() => setSideNavOpen(!isSideNavOpen)}
        >
          <MdOutlineMenu
            className={clsx(
              "absolute inset-0 m-auto transition-opacity duration-300",
              isSideNavOpen ? "opacity-100" : "opacity-0"
            )}
            size={30}
            color="#ffffff"
          />
          <IoClose
            className={clsx(
              "absolute inset-0 m-auto transition-opacity duration-300",
              isSideNavOpen ? "opacity-0" : "opacity-100"
            )}
            size={30}
            color="#ffffff"
          />
        </button>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl text-white">Portfolio</h1>
        </div>
      </div>
      <nav
        className={clsx(
          "fixed top-0 h-full w-full sm:w-64 bg-portfolio-header shadow-lg shadow-[#4f4f4f] z-10 text-white p-6 flex flex-col",
          "transition-all duration-300",
          isSideNavOpen ? "-translate-x-full shadow-none" : "shadow-lg"
        )}
        onMouseLeave={() => setSideNavOpen(true)}
      >
        <h1 className="text-2xl text-center font-inter font-normal">Menu</h1>
        <ul className="space-y-4 text-center">
          <li className="hover:bg-[#2e2e2e] font-inter font-extralight p-2 mt-4 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out">
            Über Mich
          </li>
          <li
            className="hover:bg-[#2e2e2e] font-inter font-extralight p-2 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out"
            id="ueberwebseite"
            onClick={(e) => menunav(e)}
          >
            Über diese Webseite
          </li>
        </ul>
      </nav>

      <div className="w-full h-full flex flex-col gap-4 md:flex-row bg-gradient-to-tl overflow-auto from-login-blue via-login-dark to-portfolio-header">
            <div className="w-full h-full md:w-1/2 flex justify-center items-center">
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
                            <p className="text-[#4562E6] text-2xl md:text-4xl underline decoration-[#4562E6] underline-offset-4 font-inter font-normal">
                                Über Diese Webseite
                                
                            </p>
                       </div>
                       <div className="w-full h-[60%] md:h-[45%]">
                        <p className="text-white text-base md:text-lg font-inter font-extralight">
                            Diese Webseite habe ich innerhalb von einem Monat programmiert.
                            Ich musste mir zuerst die Grundlagen von Next.js und React aneignen,
                            bevor ich mit dem Programmieren dieser Webseite beginnen konnte.
                            Ich habe mich entschieden, Next.js zu verwenden, da es eine sehr gute
                            Performance hat und es mir ermöglicht, eine statische Webseite zu erstellen.
                            Mit tailwind konnte ich das Design der Webseite sehr einfach und schnell umsetzen.
                            Ich habe auch versucht, die Webseite so barrierefrei wie möglich zu gestalten.
                            Während dem Programmieren habe ich sehr viel neues gelernt und ich bin sehr stolz auf das Ergebnis.
                            Die Webseite könnte noch weiter verbessert werden, aber ich denke, dass sie für den Anfang sehr gut gelungen ist.
                            Diese Webseite ist statisch und wurde mit Github Pages deployed.
                        </p>
                       </div>
                    </div>

                </LiquidGlass>
            </div>
            <div className="w-full h-full md:w-1/2 flex justify-center items-center">
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
                            <span className="font-inter font-normal underline underline-offset-4 decoration-[#4562E6] text-[#4562E6] text-2xl md:text-4xl">Zusätzliche Informationen</span>
                        </div>
                        <div className="w-full h-[30%] md:h-[15%] ">
                            <p className="text-white text-base md:text-lg font-inter font-extralight">
                                Diese Webseite hat auch eine Login-Funktion, die es ermöglicht, die Informationen über mich zu schützen.
                                Jedoch finde ich das nicht notwendig.
                                Der Zugangscode ist "ACCESS2025". Mit dem Knopf unten geht es zurück zur Login-Seite.
                                </p>
                                
                        </div>
                        <div className="w-full h-1/5 flex justify-center items-center">
                        <Link href="/beta/login" className="text-white text-lg font-inter font-extralight backdrop-blur bg-opacity-30 border-2 p-3 hover:border-blue-500 transition-colors duration-150 border-white rounded-lg">
                        Gehe zur Login-Seite
                        </Link>

                        </div>
                        <div className="w-full h-1/5 flex justify-center items-center">
                        <p className="text-white text-base md:text-lg font-inter font-extralight">
                          Diese Webseite wurde mit Next.js, React, Tailwind CSS und TypeScript entwickelt.
                          Diese Webseite ist open-source und der Quellcode ist auf GitHub verfügbar.
                        </p>
                        </div>
                        <div className="w-full h-1/5 flex justify-center items-center">
                        <Link href="https://github.com/FF-website/Website" className="text-white text-lg flex flex-colfont-inter font-extralight backdrop-blur bg-opacity-30 border-2 p-3 hover:border-blue-500 transition-colors duration-150 border-white rounded-lg">
                          <FaGithub size={30} className="mr-3"/>
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
