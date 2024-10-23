interface ButtonProps {
    text: string;
    classes:string;
  }
  
   
  const HoverBtn: React.FC<ButtonProps> = ({ text, classes }) => {
    return (
      <button 
        className={`
          relative z-0 
          cursor-pointer 
          border-none outline-none 
          text-white
          bg-[#111]
          rounded-[10px]
          before:content-['']
          before:absolute 
          before:top-[-2px] 
          before:left-[-2px]
          before:w-[calc(100%+4px)]
          before:h-[calc(100%+4px)]
          before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)]
          before:bg-[length:400%]
          before:z-[-1]
          before:blur-[5px]
          before:opacity-0
          before:transition-opacity
          before:duration-300
          before:rounded-[10px]
          hover:before:opacity-100
          active:text-black
          after:content-['']
          after:absolute
          after:w-full
          after:h-full
          after:bg-[#111]
          after:left-0
          after:top-0
          after:z-[-1]
          after:rounded-[10px]
          active:after:bg-transparent
          animate-[glowing_20s_linear_infinite]
          px-6 
          py-3
          text-lg
          ${classes}
        `}
      >
        {text}
      </button>
    );
  };
  export default HoverBtn;
      