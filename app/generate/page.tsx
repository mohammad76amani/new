'use client'
import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { SideMenu } from "../components/sideMenu";
import { Screen } from "../components/screen";


export default function Generate() {
    const [selectedButtons, setSelectedButtons] = useState<any>([]);
    const [selectedButton, setSelectedButton] = useState<string>('');
  return (
    <div  className="reletive">
    <SideBar setSelectedButton={setSelectedButton}/>
    <SideMenu selectedButton={selectedButton} setSelectedButton={setSelectedButton} selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons} />
    <Screen selectedButton={selectedButtons} />
    </div>
  );
}