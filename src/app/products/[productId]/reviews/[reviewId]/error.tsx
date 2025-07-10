"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundaay({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    const reload = () =>{
        startTransition(()=>{
            router.refresh();
            reset();
        })
    }

    return (
        <>
            <h1 className="text-red-500 font-bold">{error.message}</h1>
            <button className="text-blue-400" onClick={reload}>try</button>
        </>
    )
}