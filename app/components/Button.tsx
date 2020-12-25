import { ReactNode, ReactText } from "react";

interface ButtonProps {
    children: ReactText
}

export default function Button ({children}: ButtonProps) {
    return <button className="p-3 bg-green-500 text-white rounded-md border border-green-700">{children}</button>
}