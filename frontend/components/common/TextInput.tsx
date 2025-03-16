'use client';

import { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value?: string;
    placeholder?: string;
    onRowChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput ({ 
    label = "", 
    value = "", 
    className = "",
    placeholder = "",
    onRowChange, 
    ...props 
}: CustomInputProps) {
    return (
        <div className="flex flex-col gap-y-[7px] flex-1 min-w-[200px]">
            {label && 
                <label className="text-gray-600 capitalize">
                    {label}
                </label>
            }

            <input
                value={value}
                placeholder={placeholder}
                onChange={(e) => onRowChange(e)}
                className={ `bg-white rounded-sm px-3 py-[10px] 3px] text-sm focus:outline-none 
                    border border-gray-500 text-gray-600 placeholder:text-gray-600 ${className}
                `}
                {...props}
            />
        </div>
    );
}




