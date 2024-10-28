import React, { useState } from 'react'
import {ButtonsData as BUTTONS }from '@/lib/buttons'
import { StyleForm } from './styleForm';
import {NavbarsData} from '@/lib/navBars'
interface SubMenu1Props {
    selectedButtons: any[];
    setSelectedButtons: React.Dispatch<React.SetStateAction<any[]>>;
    setSelectedNav:React.Dispatch<React.SetStateAction<string[]>>
    selectedNav:string[]
  }
  
  export const SubMenu1: React.FC<SubMenu1Props> = ({ selectedButtons, setSelectedButtons , setSelectedNav, selectedNav}) => {
  
   const [activeButton, setActiveButton] = useState<number>(0);
   const [activeNav, setActiveNav] = useState<number>(0);

   const handleButtonClick = (buttonIndex: number) => {
       setActiveButton(buttonIndex);
   };

   const handleNavSelect = (nav: any) => {
       setSelectedNav([nav ]);
   };



const handleButtonSelect = (button: any) => {
    setSelectedButtons([...selectedButtons, button]);
};

   const buttons = ['templates', 'layoute', 'styles'];

   const renderActiveButtonContent = () => {
       switch (activeButton) {
           case 0:
               return (
                <>
                   <div className="flex  w-full gap-y-2 gap-x-2  overflow-auto  p-1 m-1">
                       {BUTTONS.map(button => (
                           <div key={button.id} className='mt-2 w-[48%] flex justify-center' onClick={() => handleButtonSelect(button)}>
                               {React.createElement(button.component as React.ComponentType<any>, { ...button.defaultProps, classes: button.defaultProps.classes || '' })}
                           </div>
                       ))}
                   </div>
                   <br />
                    <span className='p-2 bg-green-200 rounded-full m-2 mt-5'>navBars:  </span>

                   <div className="flex flex-col w-fit gap-y-2    p-1 m-1">
                       {NavbarsData.map(nav => (
                           <div key={nav.id} className='mt-2 w-[48%] flex w-fit' onClick={() => handleNavSelect(nav)}>
                               {React.createElement(nav.component as React.ComponentType<any>, { ...nav.defaultProps, classes: nav.defaultProps.classes || '' })}
                           </div>
                       ))}
                   </div>
                </>
               );
           case 1:
               return (
                   <div>
                       <h2>Selected Buttons:</h2>
                     
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
                       className={`px-3 py-2 transition ease-in-out duration-300 text-sm ${
                           activeButton === index ? 'border-b-black border-b hover:none': ' text-black '
                       }`}
                   >
                       {buttonText}
                   </button>
               ))}
           </div>
           
           <div className='bg-white h-[75vh] overflow-auto'>
             <span className='p-2 bg-green-200 rounded-full m-2 mt-5'>butons:</span>
             {renderActiveButtonContent()}
           </div>
       </div>
   )
}