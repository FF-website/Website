"use client"

// ## REACT + NEXT ##
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import clsx from 'clsx';


// ## Components ##
import PopUpFunc from '../../../components/popUp';

// import LiquidGlass from '@nkzw/liquid-glass';
import dynamic from 'next/dynamic';
import { isAuthenticated, login, logout } from '../../lib/auth';

// ## ICONS ##

import { IoEnterOutline } from "react-icons/io5";
import { LuLockKeyhole } from "react-icons/lu";
import { RxEnter } from "react-icons/rx";




type PopUp = {
  id: number;
  text: string;
  color: string;
  visible: boolean;
  type: "success" | "error" | "info"
};

const LiquidGlass = dynamic(() => import('@nkzw/liquid-glass'), {
  ssr: false,
});





export default function Home() {
    const [PopUps, setPopUps] = useState<PopUp[]>([]);
  
    const addPopUpMessage = (text: string, color: string, type: 'success' | 'error' | 'info' ) => {
  
    const id = Date.now()
  
    const newPopUp: PopUp = {
      id: id,
      text: text,
      color: color,
      visible: false,
      type: type,
    }
  
  
    setPopUps((prevPopUp) => [...prevPopUp, newPopUp])
    setTimeout(() => {
        setPopUps((prev) =>
          prev.map((popup) =>
            popup.id === id ? { ...popup, visible: true } : popup
          )
        )}, 100)

  
    setTimeout(() => {
        setPopUps((prev) =>
          prev.map((popup) =>
            popup.id === id ? { ...popup, visible: false } : popup
          )
        );
      
           setTimeout(() => {
          setPopUps((prev) =>
            prev.filter((popup) => popup.id !== id)
          );
        }, 300); // match transition duration
      }, 2500);
  
  }
  

  const router = useRouter()


  const [inputValue, setInputValue] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [Clicked, setClicked] = useState(false)
  const [PointerEntered, setPointerEntered] = useState(false)

const buttonClick = (Pointer: boolean, TouchStart: boolean) => {
  if (!Pointer) {
    if (TouchStart) {
      setClicked(true)
    } else {
      setClicked(false)
    }
    
  } else {

  setClicked(true)

  setTimeout(() => setClicked(false), 150)

  if (inputValue === "GOOGLE25") {
    login()

    addPopUpMessage("Redirecting to page...", "#0c8501", "success")

  
  router.push('/portfolio')
  } else {
   addPopUpMessage("Access Denied", "#e80602", "error")
  }
  

}
}

const onkeydown = (event: any) => {
  if (event.key === "Enter") {
    buttonClick(true, false)
  }
}



  // State to store input value

  // Function to handle input changes
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  


  return (
    <>
  <div className="flex justify-center items-center min-h-screen overflow-hidden bg-gradient-to-t from-login-blue to-login-dark">

    <LiquidGlass 
    blurAmount={1}
    displacementScale={100}
    saturation={100}
    aberrationIntensity={0}
    borderRadius={16}
    elasticity={0.00}
    mode='standard'
    >

      <div className='flex flex-col gap-4 p-6 justify-center items-center text-center text-white'>
          <span className='text-4xl font-bold'>Zugangscode</span>
          <LuLockKeyhole size={100} color='white' className=''/>
        </div>
                <input
                  id="input-box"
                  type="text"
                  value={inputValue} // Set value of input from state
                  onChange={handleInputChange} // Handle input change
                  onKeyDown={onkeydown}
                  className="w-full p-3 mt-6 bg-blue-950 backdrop-blur-md text-white border-2 border-gray-300/40 transition-all duration-100 ease-in-out placeholder-gray-150 rounded-xl focus:outline-none focus:ring-2  focus:border-login-blue"
                  placeholder="Zugangscode"
                />
                
                <button 
                onPointerEnter={(e)=> setPointerEntered(true)}
                onPointerLeave={(e)=> setPointerEntered(false)}
                onClick={(e)=> buttonClick(PointerEntered, false)}
                onTouchStart={(e)=> buttonClick(PointerEntered, true)}
                onTouchEnd={(e)=> buttonClick(PointerEntered, false)}
                className={clsx(
                  "w-full mt-3 relative flex items-center justify-center bg-blue-700 text-white px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-12 md:py-1 md:text-xl rounded-xl transform transition duration-150",
                  PointerEntered ? "scale-105" : "scale-100",
                  Clicked ? "scale-90" : "scale-100"
                )}>
                 <RxEnter className="absolute left-[86px] top-1/2 transform -translate-y-1/2" size={21}/>
                 <span className='text-center text-md font-inter font-normal'>Enter</span>
                </button>

    </LiquidGlass>


    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      {PopUps.map((popup, index) => (
        <div
          key={popup.id}
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: `${index * 60}px` }} // Adjust if popups are taller/shorter
        >
          <PopUpFunc
            showPopUp={popup.visible}
            setShowPopup={() => {
              setPopUps((prev) =>
                prev.map((p) =>
                  p.id === popup.id ? { ...p, visible: false } : p
                )
              );
              setTimeout(() => {
                setPopUps((prev) => prev.filter((p) => p.id !== popup.id));
              }, 300);
            }}
            PopUpText={popup.text}
            PopUpColorHEX={popup.color}
            type={popup.type}
          />
        </div>
      ))}
    </div>



</div>
   </>
  



)}
