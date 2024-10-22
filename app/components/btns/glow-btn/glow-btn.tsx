interface ButtonProps {
    text: string;
    classes:string;
  }
  
  import './glow-btn.css'
   
  const HoverBtn: React.FC<ButtonProps> = ({  text, classes }) => {
    return (
        <div className={`glow-on-hover  ${classes}`}>{text}</div>
    );};
  export default HoverBtn;
      