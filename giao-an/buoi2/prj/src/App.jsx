import "./App.css"
import DefaultComponent from "./components/DefaultComponent"
import { Component1, Component2 } from "./components/ManyComponent"

function App() {
    return (
        <>
            <DefaultComponent />
            <Component1 />
            <Component2 />
        </>
    )
}

export default App
