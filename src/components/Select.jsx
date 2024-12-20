import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className,
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                ref={ref}
                id={id}
                {...props}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {options?.map((option) => ( // ?. this is optionaly loop or map. if 0 zero values will be there in options variable there will no some kind of crash or error occurs.
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
