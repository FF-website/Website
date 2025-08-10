import clsx from 'clsx';
import { useState, useEffect } from 'react';

// ## SVGs ##
import errorsvg from './popup_svgs/errorsvg.tsx'
import successsvg from './popup_svgs/successsvg.tsx'




const PopUpFunc = ({ 

  showPopUp, 
  setShowPopup, 
  PopUpText, 
  PopUpColorHEX, 
  type }: { 
    showPopUp: boolean, 
    setShowPopup: any, 
    PopUpText: string, 
    PopUpColorHEX: string, 
    type: 'success' | 'error' | 'info'}) => {

      let Typeofpopup = () => errorsvg()



      if (type == 'error') {
        Typeofpopup = () => errorsvg()
      } else if (type == "success") {
        Typeofpopup = () => successsvg()
      }
   
  return (
    <div
      className={clsx(
        'fixed flex flex-col top-8 left-1/2 transform -translate-x-1/2 z-50',
        'transition-all duration-300',
        'shadow-lg rounded-xl px-4 py-3 w-80 text-white flex items-center',
        showPopUp
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-90 pointer-events-none'
      )}
      style={{ backgroundColor: PopUpColorHEX }}
    >
      <div className="relative w-full">
        {/* Close Button */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 cursor-pointer"
          onClick={() => setShowPopup(false)}
        >
            <Typeofpopup/>
          
        </div>

        {/* Centered Text */}
        <p className="text-sm font-medium text-center">{PopUpText}</p>
      </div>
    </div>
  );
};

export default PopUpFunc;
