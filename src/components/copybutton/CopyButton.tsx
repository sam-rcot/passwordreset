import React from 'react';

type CopyButtonProps = {
    copyRef: React.RefObject<HTMLDivElement>;
};

const CopyButton = ({copyRef}: CopyButtonProps) => {
    const handleClick = () => {
        handleCopy()
    }
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
        <button onClick={handleClick}
                className="px-8 py-3 text-dark-teal font-bold bg-teal rounded-3xl
        hover:bg-teal/70 hover:text-dark-teal/90 hover:scale-110
        active:scale-95
        transition-all duration-200 ease-in-out">
            Copy text
        </button>
    );
};

export default CopyButton;
