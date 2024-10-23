interface ButtonProps {
    classes: string;
    text: string;
  }
  
   
  const SimpleBtn: React.FC<ButtonProps> = ({ classes, text }) => {
      return (
          <div>
              
              <div className={`  text-center text-xl icon-cart mx-auto bg-green-500 hover:bg-green-600 text-white hover:shadow-lg mb-2  ${classes}`}>{text}</div>
          </div>
      );
  };

  export default SimpleBtn;