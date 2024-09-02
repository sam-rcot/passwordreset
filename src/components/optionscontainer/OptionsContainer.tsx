import { useState, useEffect, ReactNode } from "react";

type OptionsContainerProps = {
    children: ReactNode;
    containerText: string;
};

const OptionsContainer = ({ containerText, children }: OptionsContainerProps) => {
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
        className={`w-96 transition-all duration-400 ease-in-out ${isCollapsed ? 'h-12 hover:scale-102.5 hover:bg-teal/70 hover:text-dark-teal/90 active:scale-95' : 'h-48 rounded-xl'} flex flex-col items-center justify-center bg-teal p-4 box-border rounded-3xl`}
      >
          <div
            onClick={toggleCollapse}
            className="cursor-pointer w-full text-dark-teal font-bold text-center"
          >
              <button className="text-center">
                  {isCollapsed ? `Show ${containerText}` : `Hide ${containerText}`}
              </button>
          </div>
          {showContent && (
            <div className="flex flex-col items-center justify-center mt-4">
                {children}
            </div>
          )}
      </div>
    );
}

export default OptionsContainer;