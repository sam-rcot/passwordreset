type ButtonProps = {
  buttonText?: string;
  onClick?: () => void;
  id?: string;
  children?: React.ReactNode;
  disabled?: boolean; // Added disabled prop
  className?: string; // Added optional className for additional styling
};

const Button = ({
  buttonText,
  onClick,
  children,
  id,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      id={id || 'Button'}
      className={`box-border w-48 rounded-3xl bg-teal px-8 py-3 font-bold text-dark-teal transition-all duration-200 ease-in-out ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:scale-110 hover:bg-teal/70 hover:text-dark-teal/90 active:scale-95'
      } ${className}`}
      onClick={disabled ? undefined : onClick} // Disable onClick if disabled
      disabled={disabled} // Ensure the button is disabled in the DOM
      {...props}
    >
      {children ? children : buttonText}
    </button>
  );
};

export default Button;
