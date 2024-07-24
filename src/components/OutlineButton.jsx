import React from 'react'

export const OutlineButton = ({ title, onClick, className, customPadding }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-white border border-custom-blue text-custom-blue rounded-xl ${customPadding ? customPadding : "p-3"} font-poppins lg:text-base text-sm font-medium  outline-none hover:bg-custom-blue hover:text-white ${className}`}>
            {title}
        </button>
    )
}