import React from "react"

export default function GreetingPage({ title }: { title: string }) {
    return <div className="h-[80vh] flex items-center justify-center text-2xl font-bold">{title}</div>
}
