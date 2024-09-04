import React from "react";

type CheckBoxProps = {
  labelText: string;
  id: string;
  type?: string;
  className?: string;
  onChange: (checked: boolean) => void;
};

const CheckBox = ({
                    labelText,
                    type = "checkbox",
                    className,
                    id,
                    onChange,
                    ...props
                  }: CheckBoxProps) => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  };
  const handleClick = () => {
    window.dataLayer.push({
      event: "checkbox_click",
      clickText: labelText,
    });
  };

  return (
    <div
      className={`relative flex h-fit w-full items-center justify-between gap-3 rounded-lg border p-4 font-nunito text-dark-teal transition-transform duration-200 group-hover:scale-110 ${className}`}
      onClick={handleClick}
    >
      <input
        className="peer h-6 w-6 rounded-sm border-gray-300 text-dark-teal hover:border-teal/50 focus:ring-teal/50"
        id={id}
        name={id}
        type={type}
        value={id}
        checked={checked}
        onChange={handleChange}
      />
      <label
        className="flex h-6 w-fit cursor-pointer flex-row items-center justify-items-start"
        htmlFor={id}
        {...props} // This passes the data-button-id to the label
      >
        <p className="">{labelText}</p>
      </label>
    </div>
  );
};

export default CheckBox;
