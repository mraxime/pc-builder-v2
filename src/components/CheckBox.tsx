import React from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({ value, onChange }: Props) => {
  return (
    <label className="flex items-center text-lg font-semibold text-white">
      <input
        className="w-5 h-5 mr-2 cursor-pointer"
        name={value}
        type="checkbox"
        onChange={onChange}
      />
      {value.toUpperCase()}
    </label>
  );
};

export default CheckBox;
