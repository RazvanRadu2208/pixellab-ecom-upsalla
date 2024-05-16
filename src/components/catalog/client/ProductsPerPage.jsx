import React from 'react';

const options = [10, 12, 14, 16, 20];

export const ProductsPerPage = ({ onChange }) => {
  return (
    <div className="pb-10 text-center flex justify-center gap-2">
      <label htmlFor="perPage">Products per page:</label>
      <select
        name="perPage"
        id="perPage"
        onchange={(e) => onchange(parseInt(e.target.value, 10))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};