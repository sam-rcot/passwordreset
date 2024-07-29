import { useState } from "react";
import { ReactNode } from "react";

type OptionsContainerProps = {
    children: ReactNode;
    containerText: string;
};

const OptionsContainer = ({ containerText, children }: OptionsContainerProps) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div id="OptionsContainer" className="w-48 h-fit flex-col justify-center items-center">
            <div onClick={toggleCollapse} className="cursor-pointer text-purple w-fit">
                <button>
                    {isCollapsed ? "Show" : "Hide"}
                </button>
                &nbsp;{containerText}
            </div>
            {!isCollapsed && (
                <div className="flex-col items-center justify-center">
                    {children}
                </div>
            )}
        </div>
    );
}

export default OptionsContainer;