import React, { useState } from 'react'
import {ButtonsData as BUTTONS }from '@/lib/buttons'
import { StyleForm } from './styleForm';
interface SubMenu1Props {
    selectedButtons: any[];
    setSelectedButtons: React.Dispatch<React.SetStateAction<any[]>>;
  }
  
  export const SubMenu1: React.FC<SubMenu1Props> = ({ selectedButtons, setSelectedButtons }) => {
  
   const [activeButton, setActiveButton] = useState<number>(0);
   

   const handleButtonClick = (buttonIndex: number) => {
       setActiveButton(buttonIndex);
   };

   const handleButtonSelect = (button: any) => {
       setSelectedButtons([...selectedButtons, button]);
   };

   const buttons = ['templates', 'layoute', 'styles'];

   const renderActiveButtonContent = () => {
       switch (activeButton) {
           case 0:
               return (
                   <div className="flex flex-wrap w-full gap-y-2 overflow-y-auto justify-center">
                       {BUTTONS.map(button => (
                           <div key={button.id} className='mt-2 w-1/2 flex justify-center' onClick={() => handleButtonSelect(button)}>
                               {React.createElement(button.component as React.ComponentType<any>, { ...button.defaultProps, classes: button.defaultProps.classes || '' })}
                           </div>
                       ))}
                   </div>
               );
           case 1:
               return (
                   <div>
                       <h2>Selected Buttons:</h2>
                       <div className="flex flex-wrap gap-4">
                           {selectedButtons.map((button, index) => (
                               <div key={index}>
                                   {React.createElement(button.component as React.ComponentType<any>, { ...button.defaultProps, classes: button.defaultProps.classes || '' })}
                               </div>
                           ))}
                       </div>
                   </div>
               );
           case 2:
               return (
                   <div>
                     <StyleForm/>
                   </div>
               );
           default:
               return null;
       }
   };

   return (
       <div className="flex flex-col space-y-4">
           <h1>SubMenu1</h1>
           <div className='flex gap-x-2'>
               {buttons.map((buttonText, index) => (
                   <button
                       key={index}
                       onClick={() => handleButtonClick(index)}
                       className={`px-4 py-2 transition ease-in-out duration-300 text-sm ${
                           activeButton === index ? 'border-b-black border-b hover:none': ' text-black '
                       }`}
                   >
                       {buttonText}
                   </button>
               ))}
           </div>
           <div className='bg-white h-[75vh] overflow-auto'>
             {renderActiveButtonContent()}
           </div>
       </div>
   )
}