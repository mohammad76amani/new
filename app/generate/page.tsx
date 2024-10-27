'use client'
import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { SideMenu } from "../components/sideMenu";
import { Screen } from "../components/screen";
import { StyleMenu } from "../components/StyleMenu";


export default function Generate() {
  const [selectedButtons, setSelectedButtons] = useState<any>([]);
  const [selectedButton, setSelectedButton] = useState<string>('');
  const [componentStyles, setComponentStyles] = useState({});
  const [componentId, setComponentId] = useState('')
  const [btnText,setBtnText] =useState('button')

  return (
    <div className="reletive">
      <StyleMenu setComponentStyles={setComponentStyles}  setBtnText={setBtnText} />
      <SideBar setSelectedButton={setSelectedButton} />
      <SideMenu selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        selectedButtons={selectedButtons}
        setSelectedButtons={setSelectedButtons} />
      <Screen selectedButton={selectedButtons} componentStyles={componentStyles}
      btnText={btnText} />
    </div>
  );
}