interface ButtonProps {
  classes: string;
  text: string;
  styles:{
    width:string,
    height:string,
    fontSize:string,
    fontWeight:string,
    // Add more styles as needed
  }
}

const BtnDashed: React.FC<ButtonProps> = ({ classes, text ,styles }) => {
  return (
    <button type="button" className={`bg-[#00BFA6] hover:bg-white text-white mx-auto   hover:text-[#00BFA6] py-2 px-4 uppercase tracking-[2px] cursor-pointer rounded-full border-2 border-dashed border-[#00BFA6] shadow-md transition duration-400 ease-in-out active:bg-[#87dbd0] ${classes}`}
    style={styles}>
      <span>{text}</span>
    </button>
  );
};

export default BtnDashed;
