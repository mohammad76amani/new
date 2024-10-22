interface ButtonProps {
  classes: string;
  text: string;
}

const BtnDashed: React.FC<ButtonProps> = ({ classes, text  }) => {
  return (
    <button type="button" className={`bg-[#00BFA6] hover:bg-white text-white hover:text-[#00BFA6] py-2 px-10 uppercase tracking-[2px] col-span-2 cursor-pointer rounded-full w-fit border-2 border-dashed border-[#00BFA6] shadow-md transition duration-400 ease-in-out active:bg-[#87dbd0] ${classes}`}>
      <span>{text}</span>
    </button>
  );
};

export default BtnDashed;
