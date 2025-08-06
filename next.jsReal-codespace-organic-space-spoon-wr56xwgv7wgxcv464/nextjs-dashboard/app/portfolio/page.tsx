"use client"
import { isAuthenticated, login, logout } from '../lib/auth';
import { useRouter } from 'next/navigation';
import clsx from "clsx"
import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

// ## ICONS ##
import { SiLua } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from 'react-icons/io5';
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";



const LiquidGlass = dynamic(() => import('@nkzw/liquid-glass'), {
  ssr: false,
});


export default function Page() {
  const router = useRouter()
  const [isSideNavOpen, setSideNavOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated()) {
    router.push("/login")
    }
   })

   const menunav = (e: any) => {
    router.push(`portfolio/${e.target.id}`)
   }

    return (
      <>
      <div className="w-full bg-gradient-to-t from-portfolio-header to-portfolio-header relative text-white shadow-lg shadow-[#4f4f4f]">
        <div className="w-full mx-auto px-4 py-6 flex justify-center items-center">
         <button
            className="relative w-[34px] h-[34px] border border-[#4f4f4f] z-20 shadow shadow-[#4f4f4f] rounded-lg"
            onClick={() => setSideNavOpen(!isSideNavOpen)}
          >
            <MdOutlineMenu
              className={clsx(
                'absolute inset-0 m-auto transition-opacity duration-300',
                isSideNavOpen ? 'opacity-100' : 'opacity-0'
              )}
              size={30}
            />
            <IoClose
              className={clsx(
                'absolute inset-0 m-auto transition-opacity duration-300',
                isSideNavOpen ? 'opacity-0' : 'opacity-100'
              )}
              size={30}
            />
          </button>

            <div className='max-w-7x1 mx-auto'>
              <h1 className="text-2xl">
              Portfolio
            </h1>
          </div>
        </div>
      </div>

      <div className='bg-portfolio-header flex flex-col justify-center items-center w-full min-h-screen'>
              <div className='w-1/2'>
                <LiquidGlass 
                  blurAmount={1}
                  displacementScale={100}
                  saturation={100}
                  aberrationIntensity={0}
                  borderRadius={16}
                  elasticity={0.00}
                  mode='standard'
                  style={{
                  }}
                  >
                <p className='md:text-4xl text-2xl mt-3 font-inter font-normal text-white underline'>Erfahrungen</p>
                <ul className='space-y-2'>
                  <li className='flex items-center'>
                    <IoLogoJavascript className='mt-6' size={40} color='#fcba03'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>JavaScript</span>
                  </li>
                  <li className='flex items-center'>
                    <SiLua className='mt-6' size={40} color='#0055ff'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>Lua</span>
                  </li>
                  <li className='flex items-center'>
                    <FaPython className='mt-6' size={40} color='#0263a8'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>Python</span>
                  </li>
                  <li className='flex items-center'>
                    <FaHtml5 className='mt-6' size={40} color='#ff6f00' />
                    <span className='mt-6 ml-6 font-inter font-extralight'>HTML</span>
                  </li>
                  <li className='flex items-center'>
                    <FaCss3Alt className='mt-6' size={40} color='#0384fc'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>CSS</span>
                  </li>
                </ul>
                </LiquidGlass>
              </div>

              <div className='w-2/2'>
                <LiquidGlass 
                  blurAmount={1}
                  displacementScale={100}
                  saturation={100}
                  aberrationIntensity={0}
                  borderRadius={16}
                  elasticity={0.00}
                  mode='standard'
                  style={{
                  }}
                  >
                <p className='md:text-4xl text-2xl mt-3 font-inter font-normal text-white underline'>Erfahrungen</p>
                <ul className='space-y-2'>
                  <li className='flex items-center'>
                    <IoLogoJavascript className='mt-6' size={40} color='#fcba03'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>JavaScript</span>
                  </li>
                  <li className='flex items-center'>
                    <SiLua className='mt-6' size={40} color='#0055ff'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>Lua</span>
                  </li>
                  <li className='flex items-center'>
                    <FaPython className='mt-6' size={40} color='#0263a8'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>Python</span>
                  </li>
                  <li className='flex items-center'>
                    <FaHtml5 className='mt-6' size={40} color='#ff6f00' />
                    <span className='mt-6 ml-6 font-inter font-extralight'>HTML</span>
                  </li>
                  <li className='flex items-center'>
                    <FaCss3Alt className='mt-6' size={40} color='#0384fc'/>
                    <span className='mt-6 ml-6 font-inter font-extralight'>CSS</span>
                  </li>
                </ul>
                </LiquidGlass>
              </div>
              
            
          </div>
     
      
         <nav
        className={clsx(
          'fixed top-0 h-full w-full sm:w-64 bg-portfolio-header shadow-lg shadow-[#4f4f4f] z-10 text-white p-6 flex flex-col',
          'transition-all duration-300',
          isSideNavOpen
          ? '-translate-x-full shadow-none'
          : 'shadow-lg'
        )}>

        <h1 className="text-2xl font-bold">Menu</h1>
        <ul className="space-y-4">
          <li className="hover:bg-[#2e2e2e] p-2 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out">Über Mich</li>
          <li className="hover:bg-[#2e2e2e] p-2 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out">Kenntnisse</li>
          <li className="hover:bg-[#2e2e2e] p-2 rounded-lg cursor-pointer transition-colors duration-150 ease-in-out" id='ueberwebseite' onClick={(e) => menunav(e)}>Über diese Webseite</li>
        </ul>
      </nav>
        
          
      </>
    )
  }
