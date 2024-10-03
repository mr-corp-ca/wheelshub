// import React from "react";

// function CustomSelect({ label, id, options, name, onClick, onChange,  onBlur , value ,error }) {
//   return (
//     <>
//       {/* Responsive Label for select input */}
//       <label
//         htmlFor={id}
//         className="block text-sm sm:text-base font-medium font-inter text-gray-1"
//       >
//         {label}
//       </label>

//       {/* Responsive Custom select box */}
//       <div className={`bg-[#fafafa] w-full border rounded-[8px] px-3 sm:px-4 mt-2 relative ring-black ${error ? 'border border-custom-red' : 'focus-within:ring-1'}`}>
//         <select
//         error={error}
//           id={id}
//           name={name}
//           onChange={onChange}
//           onBlur={onBlur}
//           value={value}
//           className="w-full py-2 sm:py-3 bg-transparent outline-none border-none h-full text-sm sm:text-base font-medium font-inter text-gray-1 appearance-none"
//         >
//           {options?.map((option, index) => {
//             return(

//               <option onClick={onClick} key={index} value={option.value}>
//               {option.label}
//             </option>
//             )
//           }

//           )}
//         </select>

//         {/* Custom SVG arrow */}
//         <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//           <svg
//             className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CustomSelect;



import React, { useState, useRef, useEffect } from "react";

function CustomSelect({
  label,
  options = [],
  name,
  id,
  onChange = () => {},
  className,
  onClick,
  onBlur,
  value,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.length > 0 ? options[0] : { value: "", label: "Select" }
  );
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange({ target: { name, value: option.value } });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex flex-col gap-y-1  ${className} `} ref={dropdownRef}>
      <label
        htmlFor={id}
        className="text-base font-medium font-inter text-gray-1 "
      >
        {label}
      </label>
      <div
        className={`relative border px-3 ${error ? 'border border-custom-red' : 'focus-within:ring-1'} ring-black rounded-lg bg-[#fafafa]`}
      >
        <button
          type="button" // Prevent form submission
          className="w-full outline-none py-3 caret-custom-blue group bg-[#fafafa] flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-base font-medium font-inter text-gray-1">
            {selectedOption.label}
          </span>
          <svg
            className="w-5 h-5 ml-2"
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
            ></path>
          </svg>
        </button>
        {isOpen && (
          <ul
            className={`absolute right-0 mt-2 w-full border rounded-lg bg-white shadow-lg z-10 max-h-60 overflow-auto text-base font-medium font-inter text-gray-1`}
          >
            {options.length === 0 ? (
              <li className="px-3 py-2 cursor-not-allowed text-base font-medium font-inter text-gray-1">
                No Records
              </li>
            ) : (
              options.map((option, index) => (
                <li
                  key={index}
                  className={` text-base font-medium font-inter text-gray-1 px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                    option.value === selectedOption.value ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CustomSelect;