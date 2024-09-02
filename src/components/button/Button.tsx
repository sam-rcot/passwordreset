type ButtonProps = {
    buttonText: string;
    onClick?: () => void;  // Optional prop to handle click events
};

const Button = ({ buttonText, onClick }: ButtonProps) => {
    return (
        <button
            id="Button"
            className="px-8 py-3 text-dark-teal font-bold bg-teal rounded-3xl
                hover:bg-teal/70 hover:text-dark-teal/90 hover:scale-110 active:scale-95 transition-all duration-200 ease-in-out"
            onClick={onClick} // Add the onClick event handler here
        >
            {buttonText}
        </button>
    );
};

export default Button;