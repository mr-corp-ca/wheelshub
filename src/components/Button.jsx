import React from 'react'

export const Button = ({ title, onClick, className, customPadding }) => {
    return (
        <div className=''>
            <button
                onClick={onClick}
                className={`bg-custom-blue text-white rounded-xl font-medium active:bg-blue-600 hover:bg-blue-500 outline-none ${className} w-[150px] h-[44px] flex items-center justify-center`}>
                {title}
            </button>
        </div>
    )
}
