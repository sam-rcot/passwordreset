type CheckBoxProps = {
    label: string;
    labelText: string;
    // setValue: (value: string) => void;
    type?: string;
    className?: string; // Add className to the props
};

const CheckBox = ({label, labelText, type = "checkbox", className}: CheckBoxProps) => {
    return (
        <div className={`flex w-fit px-3 items-center ${className}`}>
            <label htmlFor={label} className="w-fit text-left pr-4 text-purple peer font-nunito">{labelText}</label>
            <input
                id={label}
                type={type}
                className=""
            />
        </div>
    );
}

export default CheckBox;
