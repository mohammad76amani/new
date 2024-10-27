interface ButtonProps {
    classes: string;
    text: string;
    styles:{}
}
   
const SimpleBtn: React.FC<ButtonProps> = ({ classes, text, styles }) => {
    return (
        <div>
            <div className={`changable flex items-center justify-center bg-green-500 hover:bg-green-600 text-white hover:shadow-lg ${classes}`} style={styles}>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default SimpleBtn;
