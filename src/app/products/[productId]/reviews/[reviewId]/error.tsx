"use client"

export default function ErrorBoundaay({error}: {error: Error}){
    return <h1 className="text-red-500 font-bold">{error.message}</h1>
}