import React, { useState, useEffect } from "react";
import { SubMenu1 } from "./subMenu1";

interface SideMenuProps {
  selectedButton: string;
  setSelectedButton: (button: string) => void;
  setSelectedButtons: React.Dispatch<React.SetStateAction<any[]>>;
  selectedButtons: any[];
}



export const SideMenu: React.FC<SideMenuProps> = ({
  selectedButtons,
  setSelectedButtons,
  selectedButton,
  setSelectedButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    selectedButton ? setIsOpen(true) : setIsOpen(false);
  }, [selectedButton]);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedButton("");
  };
 
  const renderMenuContent = () => {
    switch (selectedButton) {
      case "1":
        return (
          <div>
            <SubMenu1 setSelectedButtons={setSelectedButtons} selectedButtons={selectedButtons} />
          </div>
        );
      case "2":
        return (
          <div>
            <h3>Button 2 Content</h3>
            <p>This is the content for Button 2</p>
          </div>
        );
      case "3":
        return (
          <div>
            <h3>Button 3 Content</h3>
            <p>This is the content for Button 3</p>
          </div>
        );
      case "4":
        return (
          <div>
            <h3>Button 4 Content</h3>
            <p>This is the content for Button 4</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    isOpen && (
      <div
        className={`side-menu ml-20 p-3 absolute top-0 bottom-0 left-0 bg-slate-100 w-[250px] z-100 ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="menu-content">
          <button
            onClick={handleClose}
            className="mb-4 px-2 py-2 bg-white hover:bg-red-100 rounded-full ml-0 transition-colors duration-300 z-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </button>
          {renderMenuContent()}
        </div>
      </div>
    )
  );
};
