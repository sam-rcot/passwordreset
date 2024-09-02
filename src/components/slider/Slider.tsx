import React from 'react';

type SliderProps = {
  label: string;
  id: string;
  type?: string;
  value: number;
  onChange: (value: number) => void;
};

const Slider = ({
  label,
  id,
  type = 'range',
  value,
  onChange,
  ...props
}: SliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="flex h-fit w-fit flex-col items-center gap-2 rounded-md p-4 align-middle">
      <div className="flex h-fit w-48 rounded-md align-middle">
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          min="8"
          max="20"
          onChange={handleChange}
          className="w-48 appearance-none"
        />
      </div>
      <label htmlFor={id} className="font-nunito text-xs text-dark-teal">
        {label}{' '}
        <span className="" {...props}>
          {value}
        </span>
      </label>
    </div>
  );
};

export default Slider;
