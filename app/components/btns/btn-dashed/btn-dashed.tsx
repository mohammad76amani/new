interface ButtonProps {
  classes: string;
  text: string;
}

const BtnDashed: React.FC<ButtonProps> = ({ classes, text  }) => {
  return (
    <button type="button" className={`bg-[#00BFA6] hover:bg-white text-white mx-auto w-fit  hover:text-[#00BFA6] py-2 px-4 uppercase tracking-[2px] cursor-pointer rounded-full border-2 border-dashed border-[#00BFA6] shadow-md transition duration-400 ease-in-out active:bg-[#87dbd0] ${classes}`}>
      <span>{text}</span>
    </button>
  );
};

export default BtnDashed;
