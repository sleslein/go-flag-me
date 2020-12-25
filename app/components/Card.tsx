import { ReactNode } from "react";

interface CardProps {
    title: string,
    cssOverride?: string,
    children: ReactNode
}

export default function Card({title, children, cssOverride}: CardProps) {  
    return (
        <div className={`shadow w-2/5 bg-gray-100 p-2 ${cssOverride ?? ''}`}>
            <div className="text-lg font-bold mb-1">{title}</div>
            <div>{children}</div>
        </div>
    )
}