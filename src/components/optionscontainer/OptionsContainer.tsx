import { useState, useEffect, ReactNode } from 'react';

type OptionsContainerProps = {
  children: ReactNode;
  containerText: string;
};

const OptionsContainer = ({
  containerText,
  children,
  ...props
}: OptionsContainerProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const toggleCollapse = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      // Delay the content display to match the expansion animation
      setTimeout(() => setShowContent(true), 50); // Adjust the delay to match your animation duration
    } else {
      setShowContent(false);
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    if (isCollapsed) {
      setShowContent(false);
    }
  }, [isCollapsed]);

  return (
    <div
      id="OptionsContainer"
      className={`duration-400 w-96 transition-all ease-in-out ${isCollapsed ? 'h-12 hover:scale-102.5 hover:bg-teal/70 hover:text-dark-teal/90 active:scale-95' : 'h-48 rounded-xl'} box-border flex flex-col items-center justify-center rounded-3xl bg-teal p-4`}
    >
      <div
        onClick={toggleCollapse}
        className="w-full cursor-pointer text-center font-bold text-dark-teal"
      >
        <button className="text-center" {...props}>
          {isCollapsed ? `Show ${containerText}` : `Hide ${containerText}`}
        </button>
      </div>
      {showContent && (
        <div className="mt-4 flex flex-col items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default OptionsContainer;
