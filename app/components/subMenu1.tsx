import React, { useState } from 'react'
import BtnDashed from '../components/btns/btn-dashed/btn-dashed'
import BtnGradiant from '../components/btns/btn-gradiant/btn-gradiant'
import Button1 from '../components/btns/btn-one/btn-one'
import BtnOutlineGradiant from "./btns/btn-outline-gradiant/btn-outline-gradiant";
import BtnThumb from "./btns/btn-thumb/btn-thumb";
import BtnOutline from "./btns/BtnOutline/BtnOutline";
import HoverBtn from "./btns/glow-btn/glow-btn";
import BtnLike from "./btns/like-btn/like-btn";
import NextBtn from "./btns/next-btn/next-btn";
import BtnShine from "./btns/shine-btn/shine-btn";
import SimpleBtn from "./btns/simple-btn/simple-btn";
export const SubMenu1 = () => {
    const BUTTONS = [
        { id: "btn1", component: <BtnDashed classes={"my-1 mx-auto "} text={"botton"} /> },
        { id: "btn2", component: <BtnGradiant classes={"py-2 px-4 text-lg"} text={"button"} /> },
        { id: "btn4", component: <Button1 classes={"mt-1 text-center rounded-lg py-2 px-5 w-fit mx-auto "} text={"button"} /> },
        { id: "btn5", component: <BtnOutlineGradiant text={"button"} classes="mt-2 py-2 px-4" /> },
        { id: "btn6", component: <BtnThumb classes={" mx-auto"} /> },
        { id: "btn7", component: <BtnLike classes={" mt-2 mx-auto "} /> },
        { id: "btn8", component: <BtnOutline classes={" mx-auto"} text={"button"} /> },
        { id: "btn9", component: <HoverBtn text={" button "} classes={" w-fit py-2 px-4 mt-2 mx-auto"} /> },
        { id: "btn10", component: <NextBtn classes={" w-fit  mt-2 mx-auto"} text={" button "} /> },
        { id: "btn11", component: <BtnShine classes={" w-fit text-lg  mt-4 mx-auto py-2 px-4 rounded-lg font-semibold"} text={" button "} /> },
        { id: "btn12", component: <SimpleBtn classes={" py-2 px-4 mx-auto"} text={"button"} /> },
      ];
      const [activeButton, setActiveButton] = useState<number >(0);

      const handleButtonClick = (buttonIndex: number) => {
          setActiveButton(buttonIndex);
      };
  
      const buttons = ['templates', 'layoute', 'styles'];
  
      const renderActiveButtonContent = () => {
          switch (activeButton) {
              case 0: // templates
                  return (
                      <div className=" items-center flex flex-col justify-center gap-2 overflow-y-auto">
                          {BUTTONS.map(button => (
                              <div key={button.id}>{button.component}</div>
                          ))}
                      </div>
                  );
              case 1: // layoute
                  return (
                      <div></div>
                  );
              case 2: // styles
                  return (
                      <div></div>
                  );
              default:
                  return null;
          }
      };
  
      return (
          <div className="flex flex-col space-y-4 ">
              <h1>SubMenu1</h1>
              <div className='flex gap-x-2  '>
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