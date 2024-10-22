'use client'


interface ButtonData {
  value: string
  svg: React.ReactNode
  title: string
}
interface SideBarProps {
    setSelectedButton: (button: string) => void;
  }
const buttons: ButtonData[] = [
  {
    value: '1',
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    title: 'خانه'
  },
  {
    value: '2',
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Info'
  },
  {
    value: '3',
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>,
    title: 'Add'
  },
  {
    value: '4',
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Settings'
  },
]

export const SideBar: React.FC<SideBarProps> = ({ setSelectedButton }) => {
    const handleButtonClick = (buttonName: string) => {
      setSelectedButton(buttonName);
    };
  
  return (
    <div className="fixed left-0 top-0 w-20 h-screen bg-gray-100 flex flex-col items-center py-5 border-e-2">
      {buttons.map((button, index) => (
        <button
        onClick={() => handleButtonClick(button.value)}
          key={index}
          className="w-14 h-14 mb-5 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
          title={button.title}
        >
          {button.svg}
        </button>
      ))}
    </div>
  )
}
