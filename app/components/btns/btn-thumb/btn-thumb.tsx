'use client'
import React, { useState } from 'react';

interface ButtonProps {
  classes: string;
}

const BtnThumb: React.FC<ButtonProps> = ({ classes }) => {
  
  const [clickCount, setClickCount] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClickCount(!clickCount);
    e.preventDefault();
  };

  const getFillColor = () => {
    if(!clickCount){
        return 'fill-sky-700';
    }else{
          return 'fill-slate-800'}
      
      ;
    }
  

  return (
    <button
      className={`flex items-center justify-center w-[20px] h-[20px] rounded-[10px] cursor-pointer border-none bg-transparent relative group ${classes}`}
      onClick={handleClick}
    >
      <svg
        className="w-[30px] h-[30px] transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            className={`transition-colors duration-200 ${getFillColor()}`}
            d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"
          ></path>
        </g>
      </svg>
    </button>
  );
};
export default BtnThumb;
