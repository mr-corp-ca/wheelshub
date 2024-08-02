import React from 'react'
import { useState } from 'react';
function Stars() {

    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
      setRating(index + 1);
    };

  return (
   <>
     <div className="flex space-x-1">
                            {[...Array(5)].map((_, index) => (
                              <svg
                                key={index}
                                onClick={() => handleStarClick(index)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={index < rating ? "yellow" : "none"}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`h-5 w-5 cursor-pointer ${
                                  index < rating
                                    ? "text-yellow-400"
                                    : "text-gray-400"
                                }`}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73-1.64 7.03z"
                                />
                              </svg>
                            ))}
                          </div>
   </>
  )
}

export default Stars