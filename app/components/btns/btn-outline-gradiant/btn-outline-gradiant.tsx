import React from 'react';

interface ButtonProps {
  classes?: string;
  text: string;
  styles:{}
}

const BtnOutlineGradiant: React.FC<ButtonProps> = ({ classes = '', text ,styles }) => {
  return (
    <button type='button' 
      className={`
        
         font-semibold text-white rounded-full text-center
        bg-gradient-to-r from-pink-400 to-violet-600
        hover:bg-gradient-to-l
        transition-all duration-700 ease-in-out
        px-4 py-2 
        ${classes}
      ` }
      style={styles}>
      {text}
    </button>
  );
};

export default BtnOutlineGradiant;
