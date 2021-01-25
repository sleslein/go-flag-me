import { ReactNode, ReactText } from "react";

interface ButtonProps {
    type?: 'button' | 'submit'
    children: ReactText
}

export default function Button ({children, type = 'button'}: ButtonProps) {
    return <button type={type} className="p-3 bg-gray-500 text-white rounded-md border border-gray-500">{children}</button>
}