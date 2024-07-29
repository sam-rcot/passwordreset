type InputFieldProps = {
    label: string;
    labelText: string;
    setValue: (value: string) => void;
    type?: string;
    className?: string;
    placeholder?: string;
};

const InputField = ({ label, labelText, setValue, type = "text", className, placeholder}: InputFieldProps) => {
    return (
        <div className={`flex flex-col w-full ${className}`}>
            <label htmlFor={label} className="w-fit text-left pr-4 text-purple peer font-nunito mb-0.5">{labelText}</label>
            <input
                id={label}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
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
