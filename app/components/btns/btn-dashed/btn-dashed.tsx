interface ButtonProps {
  classes: string;
  text: string;
  styles:{}
}

const BtnDashed: React.FC<ButtonProps> = ({ classes, text, styles }) => {
  return (
    <button type="button" className={`hover:bg-white bg-[#00BFA6] text-center items-center justify-center text-white   hover:text-[#00BFA6] py-2 px-4 uppercase tracking-[2px] cursor-pointer rounded-full border-2 border-dashed border-[#00BFA6] shadow-md transition duration-400 ease-in-out active:bg-[#87dbd0] ${classes}`} style={styles}>
      <span className="text-center">{text}</span>
    </button>
  ); 
};

export default BtnDashed;