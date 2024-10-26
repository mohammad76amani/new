
interface ButtonProps {
    classes: string;
    text: string;
  }
  
   
  const BtnGradiant: React.FC<ButtonProps> = ({ classes, text, }) => {
    return (
      
<button type="button" className={`  w-fit bg-gradient-to-r text-center  mx-auto from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-full   ${classes}`}>                   
                         {text}
                  </button>
      
    );
  };
  
  export default BtnGradiant;