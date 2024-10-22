
interface ButtonProps {
    classes: string;
    text: string;
  }
  import './shine-btn.css'
  
   
  const BtnShine: React.FC<ButtonProps> = ({ classes, text, }) => {
    return (
        <div  className={` btn-shine mx-auto  ${classes}`}>
       {text}
      </div>
      
    );
  };
  
  export default BtnShine;