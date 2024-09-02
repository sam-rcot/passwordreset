import Button from "../button/Button.tsx";

type PasswordButtonProps = {
    buttonText: string;
    onClick: () => void;
};

const PasswordButton = ({ buttonText, onClick }: PasswordButtonProps) => {
    return (
        <Button onClick={onClick} id="PasswordButton" buttonText={buttonText} />
    );
};

export default PasswordButton;