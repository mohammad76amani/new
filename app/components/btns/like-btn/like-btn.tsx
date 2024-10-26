'use client'
import React, { useState } from 'react';

interface ButtonProps {
  classes: string;
  styles:{
    backgroundColor: string;
    width: string;
    height: string;
    fontSize: string;
    fontWeight: string;
    // Add more styles as needed
  }
}

const BtnLike: React.FC<ButtonProps> = ({ classes }) => {
  
  const [clickCount, setClickCount] = useState(true);

  const handleClick = () => {
    setClickCount(!clickCount);
  };

  const getFillColor = () => {
    if(!clickCount){
        return 'fill-[#e61717]';
    }else{
          return 'fill-slate-700'}
      
      ;
    }
  

  return (
    <button type="button"
      className={`flex items-center justify-center w-[50px] h-[50px] rounded-[10px] cursor-pointer border-none bg-transparent relative group ${classes}`}
      onClick={handleClick}
    >
      <svg
        className=" transition-transform duration-200 group-hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400.00001"
        id="svg2"
        version="1.1"
      >
        <g id="layer1" transform="translate(0,-652.36216)">
          <path
            d="m 98.133214,652.38729 c -11.7545,0.2341 -24.353,3.6716 -37.7047,11.493 -103.624,60.7034 -84.4526,232.3336 139.886396,388.38891 l 0,0.093 c 0.027,-0.016 0.053,-0.032 0.081,-0.048 0.027,0.016 0.052,0.032 0.079,0.048 l 0,-0.093 c 221.3186,-145.95385 243.5122,-327.68551 139.8881,-388.38891 -84.7806,-49.6647 -139.1183,77.2371 -139.9667,79.2336 -0.7118,-1.6752 -39.3752,-91.9795 -102.261996,-90.7266 z"
            id="path23380"
            className={`transition-colors duration-200 ${getFillColor()}`}
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default BtnLike;
