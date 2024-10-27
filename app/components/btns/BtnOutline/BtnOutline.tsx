import React from "react";
interface ButtonProps {
  classes: string;
  text: string;
  styles:{
    width: string;
    height: string;
    fontSize: string;
    fontWeight: string;
  }
}
const BtnOutline: React.FC<ButtonProps> = ({ classes, text , styles}) => {
  return (
    <div 
      className={`bg-transparent flex text-center text-black w-[100px] group h-[2.9em] border-[#3654ff] border-[0.2em] hover:text-white rounded-lg  transition-all duration-600 ease-in-out hover:bg-[#3654ff] hover:cursor-pointer  ${classes}`}
    style={styles}>
     <div className="my-auto mx-auto">{text}</div> 
    </div>
  );
};

export default BtnOutline;
