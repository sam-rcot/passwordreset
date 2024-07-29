import React from "react";


type SliderProps = {
    label: string;
    id: string;
    type?: string;
    value: number;
    onChange: (value: number) => void;
}

const Slider = ({label, id, type = "range", value, onChange}: SliderProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    }

    return (
        <div className="flex flex-col align-middle items-center gap-2 w-fit h-fit p-4 rounded-md">
            <div className="flex align-middle w-48 h-fit rounded-md">
                <input id={id}
                       name={id}
                       type={type}
                       value={value}
                       min="8"
                       max="20"
                       onChange={handleChange}
                       className="appearance-none w-48"/>
            </div>
            <label htmlFor={id} className="font-nunito text-purple text-xs">{label} <span
                className="">{value}</span></label>
        </div>
    )
}


export default Slider;