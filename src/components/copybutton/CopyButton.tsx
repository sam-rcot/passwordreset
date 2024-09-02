import React from 'react';
import Button from '../button/Button.tsx';

type CopyButtonProps = {
  copyRef: React.RefObject<HTMLDivElement>;
  disabled?: boolean; // Added disabled prop
  className?: string; // Added optional className prop for custom styling
};

const CopyButton: React.FC<CopyButtonProps> = ({
  copyRef,
  disabled = false,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleCopy();
    }
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
      onClick={handleClick}
      buttonText="Copy text"
      disabled={disabled}
      className={className}
    />
  );
};

export default CopyButton;
