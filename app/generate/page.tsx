'use client'
import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { SideMenu } from "../components/sideMenu";
export default function Page() {
    const [selectedButton, setSelectedButton] = useState<string>("");
    
  return (
    <div  className="reletive">
    <SideBar setSelectedButton={setSelectedButton}/>
    <SideMenu selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
    </div>
  );
}