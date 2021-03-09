import React from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ value, onChange }: Props) => {
  return (
    <input
      className="w-full max-w-xs p-2 bg-white rounded min-w-40"
      type="search"
      value={value}
      placeholder="Search a model"
      onChange={onChange}
    />
  );
};

export default SearchBox;
