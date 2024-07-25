import React, {useState} from "react";


type SliderProps = {
    label: string;
    id: string;
    type?: string;
}

const Slider = ({label, id, type = "range"}: SliderProps) => {
    const [sliderValue, setSliderValue] = useState<number>(14)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(Number(e.target.value))
        console.log(e.target.value);
    }
    return (
        <div className="flex flex-col align-middle items-center gap-2">
            <input id={id}
                   name={id}
                   type={type}
                   value={sliderValue}
                   min="8"
                   max="20"
                   onChange={handleChange}
            className="text-teal appearance-none -webkit-slider-runnable-track:bg-teal"/>
            <label htmlFor={id} className="font-nunito text-purple">{label}</label>
        </div>
    )
}


export default Slider;