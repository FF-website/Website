"use client"
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import clsx from 'clsx';
import PopUpFunc from '../../components/popUp';
import { IoEnterOutline } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import LiquidGlass from 'liquid-glass-react';
import { isAuthenticated, login, logout } from '../lib/auth';

type PopUp = {
  id: number;
  text: string;
  color: string;
  visible: boolean;
};



export default function Home() {
    const [PopUps, setPopUps] = useState<PopUp[]>([]);
  
    const addPopUpMessage = (text: string, color: string) => {
  
    const id = Date.now()
  
    const newPopUp: PopUp = {
      id: id,
      text: text,
      color: color,
      visible: false,
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

  if (inputValue === "wsg") {
    login()

    addPopUpMessage("Success", "#09b300")

  
  router.push('/portfolio')
  } else {
   addPopUpMessage("Access Denied", "#e80602")
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
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-login-blue to-login-dark">

      <div className="w-full max-w-sm p-6 bg-[#242424] border-2 border-white border-dashed rounded-lg shadow-md">
        <div className='flex flex-col justify-center items-center text-center text-white'>
          <span className='text-2xl font-bold'>Zugangscode</span>
          <FaKey size={100} color='white' className='m-4'/>
        </div>
        
        <label 
        htmlFor="input-box" 
        className="block text-sm font-medium text-white mb-2">
          Enter Access Code
        </label>
        <input
          id="input-box"
          type="text"
          value={inputValue} // Set value of input from state
          onChange={handleInputChange} // Handle input change
          onKeyDown={onkeydown}
          className="w-full p-3 bg-[#171717] text-white border border-gray-300 placeholder-gray-150 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-login-blue"
          placeholder="Access code"
        />
        
        <button 
        onPointerEnter={(e)=> setPointerEntered(true)}
        onPointerLeave={(e)=> setPointerEntered(false)}
        onClick={(e)=> buttonClick(PointerEntered, false)}
        onTouchStart={(e)=> buttonClick(PointerEntered, true)}
        onTouchEnd={(e)=> buttonClick(PointerEntered, false)}
        className={clsx(
          "w-full mt-3 relative flex items-center justify-center bg-indigo-600 text-white px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg md:px-12 md:py-1 md:text-xl rounded-lg transform transition duration-150",
          PointerEntered ? "scale-105" : "scale-100",
          Clicked ? "scale-90" : "scale-100"
        )}>
         <IoEnterOutline className="absolute ml-2 left-24 top-1/2 transform -translate-y-1/2" size={30}/>
         <span className='font-bold'>Enter</span>
        </button>
      </div>
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
      />
    </div>
  ))}
</div>



</div>
   </>
  



)}
