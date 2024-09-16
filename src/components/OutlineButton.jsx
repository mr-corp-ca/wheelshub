import React from 'react'

export const OutlineButton = ({ title, onClick, className, customPadding , customfont }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-white border border-custom-blue text-custom-blue rounded-xl ${customfont ? customfont : 'font-poppins'} ${customPadding ? customPadding : "p-3"} lg:text-base text-sm font-medium  outline-none hover:bg-custom-blue hover:text-white ${className}`}>
            {title}
        </button>
    )
}