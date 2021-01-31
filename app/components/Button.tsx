import { ReactNode, ReactText } from "react";

interface ButtonProps {
    className?: string
    type?: 'button' | 'submit'
    children: ReactText | ReactNode
}

export default function Button ({children, className ="", type = 'button'}: ButtonProps) {
    const defaultClassName = "p-1 bg-gray-500 text-white rounded-md border border-gray-500";
    const displayClass = `${defaultClassName} ${className}`;
    return <button type={type} className={displayClass}>{children}</button>
}