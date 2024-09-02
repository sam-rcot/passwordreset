import React, { useEffect, useState } from 'react';

type EmailButtonProps = {
  template: string;
  email: string;
  subject: string;
  disabled?: boolean;
  className?: string;
};

const EmailButton: React.FC<EmailButtonProps> = ({
  template,
  email,
  subject,
  disabled = false,
  className = '',
}) => {
  const encodedBody = encodeURIComponent(template);
  const encodedSubject = encodeURIComponent(subject);

  const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [isEdge, setIsEdge] = useState(false);

  function userAgentTest() {
    console.log(navigator.userAgent);
  }

  userAgentTest();
  useEffect(() => {
    // Detect if the browser is Microsoft Edge
    const isEdgeBrowser = /Edg/.test(navigator.userAgent);
    setIsEdge(isEdgeBrowser);
  }, []);

  const handleTooltipMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    if (isEdge) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseMove={handleTooltipMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-48 rounded-3xl bg-teal px-8 py-3 text-center font-bold text-dark-teal transition-all duration-200 ease-in-out ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:scale-110 hover:bg-teal/70 hover:text-dark-teal/90 active:scale-95'
      } ${className}`}
    >
      <a
        href={disabled ? undefined : mailtoLink}
        onClick={(e) => disabled && e.preventDefault()}
      >
        Send Email
      </a>
      {showTooltip && (
        <div
          className="absolute z-10 rounded bg-black px-2 py-1 text-sm text-white"
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y + 10}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          The open email app button won't work in Microsoft Edge unless you have
          a default email client selected. Please press copy email text instead.
        </div>
      )}
    </div>
  );
};

export default EmailButton;
