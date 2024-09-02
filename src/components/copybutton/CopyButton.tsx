import React from 'react';
import Button from '../button/Button.tsx';

type CopyButtonProps = {
    copyRef: React.RefObject<HTMLDivElement>;
};

const CopyButton = ({ copyRef }: CopyButtonProps) => {
    const handleClick = () => {
        handleCopy();
    };

    const handleCopy = () => {
        const resultContainerElement = copyRef.current;

        if (resultContainerElement) {
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                const range = document.createRange();
                range.selectNodeContents(resultContainerElement);
                selection.addRange(range);

                try {
                    const successful = document.execCommand('copy');
                    const msg = successful ? 'successful' : 'unsuccessful';
                    console.log(`Copy command was ${msg}`);
                } catch (err) {
                    console.error('Unable to copy', err);
                }

                selection.removeAllRanges();
            }
        }
    };

    return (
        <Button
            onClick={handleClick} // Pass the click handler to the Button component
            buttonText="Copy text" // Provide the button text
        />
    );
};

export default CopyButton;