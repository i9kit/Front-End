import { forwardRef } from "react";
import { IField } from "./field.interface";

import cn from 'clsx'

const AuthField = forwardRef<HTMLInputElement, IField>(
    ({placeholder, error, className, type = 'text', style,
    Icon, ...rest}, ref)  => {
    return (
        <div className={cn('mb-4', className)} style={style}>
            <label>
                <span className="mb-1 block ">
                    {Icon && <Icon className="mr-3"/>}
                    {placeholder}
                </span>
                <input 
                    ref={ref} 
                    type={type}
                    placeholder={placeholder}  
                    className={cn(
                    'px-4 py-2 w-full outline-none border border-grey border-solid focus:border-primary transition-all placeholder:text-grey rounded-lg', 
                    {
                        'border-red': !!error
                    })}
                    {...rest} 
                />
            </label>
            {error && <div className='text-red text-sm mt-1'>{error}</div>}
        </div>
        )
    }
)
AuthField.displayName = 'Field'

export default AuthField;