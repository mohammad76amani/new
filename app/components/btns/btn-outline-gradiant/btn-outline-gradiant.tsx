import React from 'react';

interface ButtonProps {
  classes?: string;
  text: string;
}

const BtnOutlineGradiant: React.FC<ButtonProps> = ({ classes = '', text }) => {
  return (
    <button type='button' 
      className={`
        
         font-semibold text-white rounded-full text-center
        bg-gradient-to-r from-pink-400 to-violet-600
        hover:bg-gradient-to-l
        transition-all duration-700 ease-in-out
        ${classes}
      `}
    >
      {text}
    </button>
  );
};

export default BtnOutlineGradiant;
