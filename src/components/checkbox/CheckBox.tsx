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

    // Fire dataLayer push only when the state changes
    window.dataLayer.push({
      event: "checkbox_click",
      clickText: labelText,
      checked: e.target.checked, // Optionally pass whether it was checked or not
    });
  };

  return (
    <div
      className={`relative flex h-fit w-full items-center justify-between gap-3 rounded-lg border p-4 font-nunito text-dark-teal transition-transform duration-200 group-hover:scale-110 ${className}`}
    >
      <input
        className="peer h-6 w-6 rounded-sm border-gray-300 text-dark-teal hover:border-teal/50 focus:ring-teal/50"
        id={id}
        name={id}
        type={type}
        value={id}
        checked={checked}
        onChange={handleChange} // Handle change event, includes dataLayer push
      />
      <label
        className="flex h-6 w-fit cursor-pointer flex-row items-center justify-items-start"
        htmlFor={id}
        {...props} // This passes the data-button-id to the label
      >
        <p>{labelText}</p>
      </label>
    </div>
  );
};

export default CheckBox;