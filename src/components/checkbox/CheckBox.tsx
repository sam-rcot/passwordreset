import React from "react";

type CheckBoxProps = {
    labelText: string;
    // setValue: (value: string) => void;
    id: string;
    type?: string;
    className?: string;
    onChange: (checked: boolean) => void;
};

const CheckBox = ({labelText, type = "checkbox", className, id, onChange}: CheckBoxProps) => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        onChange(e.target.checked);
    };

    return (
        <div
            className={`relative flex items-center justify-between gap-3 border rounded-lg p-4 w-36 h-fit
            group-hover:scale-110 transition-transform duration-200 font-nunito text-purple ${className} `}>
            <input
                className="text-teal focus:ring-teal/50 hover:border-teal/50 border-gray-300 peer rounded-sm w-6 h-6"
                id={id}
                name={id}
                type={type}
                value={id}
                checked={checked}
                onChange={handleChange}
            />
            <label
                className="w-fit h-6 cursor-pointer flex flex-row justify-items-start items-center"
                htmlFor={id}>
                <p className="justify-self-center">{labelText}</p>
            </label>
        </div>
    );
}

export default CheckBox;
