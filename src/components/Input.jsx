import React, { useState } from 'react'
import { EyeIcon } from '../assets/svgs/EyeIcon'

export const Input = ({ label, value, onChange, placeholder, type , className , ref}) => {

    
    const [tooglePasswordInput, setTogglePasswordInput] = useState(false)

    return (
        <div className='flex flex-col space-y-2 '>
            <label htmlFor="email"
                className='font-poppins font-medium text-base text-gray-1'>
                {label}
            </label>

            {type === "password" ?
                <div
                    className={`border-gray-5 pr-2 border rounded-lg flex flex-row w-full justify-between items-center focus-within:ring-2 ring-custom-blue caret-custom-blue group  ${className} bg-[#fafafa]`}>
                    <input
                        type={tooglePasswordInput ? "text" : "password"}
                        className=' p-2 w-full rounded-lg font-poppins text-base placeholder:text-gray-4 outline-none '
                        placeholder={placeholder}
                    />
                    <button
                        className='outline-none '
                        onClick={() => {
                            setTimeout(() => {
                                setTogglePasswordInput(false)
                            }, 500)
                            setTogglePasswordInput(!tooglePasswordInput)
                        }}>
                        <EyeIcon />
                    </button>
                </div>
                :
                <input
                    type={type}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    className={`border-gray-5 border py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-poppins text-base placeholder:text-gray-4 bg-[#fafafa] outline-none focus:ring-2 ring-custom-blue caret-custom-blue ${className}`}
                    placeholder={placeholder}
                />
            }

        </div>
    )
}
