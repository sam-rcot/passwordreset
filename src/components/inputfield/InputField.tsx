type InputFieldProps = {
    label: string;
    labelText: string;
    setValue: (value: string) => void;
    type?: string;
    className?: string; // Add className to the props
};

const InputField = ({ label, labelText, setValue, type = "text", className }: InputFieldProps) => {
    return (
        <div className={`flex flex-col w-screen px-3 ${className}`}>
            <label htmlFor={label} className="w-fit text-left pr-4 text-purple peer font-nunito mb-1">{labelText}</label>
            <input
                id={label}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                className="block w-full box-border px-3 py-1.5 text-base font-normal leading-6 text-gray-700
                bg-white bg-clip-padding border-[1.5px] border-dark-teal/50
                rounded-none
                transition duration-150 ease-in-out
                hover:border-teal hover:shadow-[0_0_0_0.2rem_rgba(0,149,143,0.25)]
                focus:shadow-[0_0_0_0.2rem_rgba(0,149,143,0.25)] focus:outline-none"
            />
        </div>
    );
}

export default InputField;
