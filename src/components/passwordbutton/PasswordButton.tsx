import Button from '../button/Button.tsx';

type PasswordButtonProps = {
  buttonText: string;
  onClick: () => void;
  className?: string;
};

const PasswordButton = ({
  buttonText,
  onClick,
  className,
  ...props
}: PasswordButtonProps) => {
  return (
    <Button
      onClick={onClick}
      id="PasswordButton"
      buttonText={buttonText}
      className={className}
      {...props}
    />
  );
};

export default PasswordButton;
