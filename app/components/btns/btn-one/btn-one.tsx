interface ButtonProps {
  classes: string;
  text: string;
}

const Button1: React.FC<ButtonProps> = ({ classes, text }) => {
  return (
      <button 
          type='button' 
          className={`
              relative
              tracking-[1px]
              text-[#0e0d0d]
              transition-all duration-300
              px-6 py-3
              text-center cursor-pointer
              before:content-['']
              before:absolute before:bottom-0 before:left-0
              before:w-full before:h-full
              before:z-[1]
              before:opacity-0
              before:transition-all before:duration-300
              before:border-t-2 before:border-b-2
              before:border-[rgb(243,133,133)]
              before:scale-x-[0.1] before:scale-y-100
              hover:before:opacity-100
              hover:before:scale-100
              after:content-['']
              after:absolute after:bottom-0 after:left-0
              after:w-full after:h-full
              after:z-[1]
              after:transition-all after:duration-300
              after:bg-[rgba(245,111,111,0.507)]
              hover:after:opacity-0
              hover:after:scale-x-[0.1] hover:after:scale-y-100
              group
              mx-auto
              ${classes}
          `}
      >
          <span className="transition-all duration-300 group-hover:tracking-[4px] text-black">
              {text}
          </span>
      </button>
  );
};

export default Button1;
