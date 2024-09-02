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
}: PasswordButtonProps) => {
  return (
    <Button
      onClick={onClick}
      id="PasswordButton"
      buttonText={buttonText}
      className={className}
    />
  );
};

export default PasswordButton;
