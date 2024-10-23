
interface ButtonProps {
    classes: string;
    text: string;
  }
  
   
  const BtnShine: React.FC<ButtonProps> = ({ classes, text, }) => {
    return (
        <div  className={` text-2xl
      px-4 py-2
      uppercase
      border-[3px]
      border-[rgb(146,148,248)]
      relative
      text-black
      overflow-hidden
      hover:shadow-[1px_1px_25px_10px_rgba(146,148,248,0.4)]
      before:content-['']
      before:absolute
      before:top-0
      before:-left-full
      before:w-full
      before:h-full
      before:bg-gradient-to-r
      before:from-transparent
      before:via-[rgba(146,148,248,0.4)]
      before:to-transparent
      before:transition-all
      before:duration-[650ms]
      hover:before:left-full mx-auto  ${classes}`}>
       {text}
      </div>
      
    );
  };
  
  export default BtnShine;