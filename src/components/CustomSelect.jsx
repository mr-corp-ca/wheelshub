import React from "react";

function CustomSelect({ label, id, options, name, onClick }) {
  return (
    <>
      {/* Responsive Label for select input */}
      <label
        htmlFor={id}
        className="block text-sm sm:text-base font-medium font-inter text-gray-1"
      >
        {label}
      </label>

      {/* Responsive Custom select box */}
      <div className="bg-[#fafafa] w-full border rounded-[8px] px-3 sm:px-4 mt-2 relative">
        <select
          id={id}
          name={name}
          className="w-full py-2 sm:py-3 bg-transparent outline-none border-none h-full text-sm sm:text-base font-medium font-inter text-gray-1 appearance-none"
        >
          {options?.map((option, index) => {
            return(
              <option onClick={onClick} key={index} value={option.value}>
              {option.label}
            </option>
            )
          }
          
          )}
        </select>

        {/* Custom SVG arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default CustomSelect;
