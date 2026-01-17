import React from "react"

function TestComponent({ className, children }) {
    return <div className={className}>{children}</div>
}

function App() {
    return <TestComponent className="text-blue-500">Hello from App</TestComponent>
}
