"use client";

import "@/app/global.css"

import { useState } from "react";

const ErrorSimulator = ({ message = "An error occored" }: { message?: string }) => {
    const [error, setError] = useState(false);

    if (error) throw new Error(message);

    return (
        <button title="click to simulate an error" className="text-red-500 bg-red-950 font-bold p-2 rounded-lg" onClick={() => setError(true)}>
            Simulatior
        </button>
    )
}

export const ErrorWrapper = ({children}:{children: React.ReactNode}) =>{
    return (
        <div className="flex flex-col mt-8 p-2 rounded-lg border border-gray-600 relative">
            <div className="absolute top-0 left-4 -translate-y-1/2">
                <ErrorSimulator message="Simulated error in the root layout"></ErrorSimulator>
            </div>
            {children}
        </div>
    )
}