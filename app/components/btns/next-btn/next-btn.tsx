interface ButtonProps {
    classes: string;
    text: string;
    styles:{
      width: string;
      height: string;
      fontSize: string;
      fontWeight: string;
    }
  }
  
   
  const NextBtn: React.FC<ButtonProps> = ({ classes, text ,styles }) => {
    return (
      <div className="flex">
        <div className={`
          flex
          justify-center
          items-center
          px-5 py-1.5
          text-white
          rounded-lg
          text-2xl
          bg-[#6225E6]
          transition-all duration-500
          shadow-[6px_6px_0_black]
          hover:shadow-[10px_10px_0_#FBC638]
          focus:outline-none
          ${classes}
        `}
        style={styles}>
          <span className=" text-center">{text}</span>
          
            
          
        </div>
      </div>
    );
  };
  
  
  export default NextBtn;