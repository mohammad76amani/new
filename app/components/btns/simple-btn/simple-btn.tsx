interface ButtonProps {
    classes: string;
    text: string;
  }
  import './simple-btn.css'
  
   
  const SimpleBtn: React.FC<ButtonProps> = ({ classes, text }) => {
      return (
          <div>
              
              <div className={`btn-svg btn-2 btn-sep icon-cart mx-auto ${classes}`}>{text}</div>
          </div>
      );
  };

  export default SimpleBtn;