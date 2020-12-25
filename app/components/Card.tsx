import { Children, ReactNode } from "react";

interface CardProps {
    title: string,
    children: ReactNode
}

export default function Card({title, children}: CardProps) {
    return (
        <div className="shadow w-2/5 bg-gray-100 p-2">
            <div className="text-lg font-bold mb-1">{title}</div>
            <div>{children}</div>
        </div>
    )
}