interface ButtonProps {
    classes: string;
    text: string;
  }
  import './btn-one.css'
  
   
  const Button1: React.FC<ButtonProps> = ({ classes, text, }) => {
    return (
        <button type='button' className={` btn-one btn1-md  hover:text-white ${classes}`}>
        <span className='text-black '>{text}</span>
      </button>
      
    );
  };
  
  export default Button1;