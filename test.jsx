import React, { useState } from "react"

export default function Counter() {
    // Khởi tạo state với giá trị ban đầu là 0
    const [count, setCount] = useState(0)

    // Hàm để tăng giá trị count
    const increment = () => {
        setCount(count + 1)
    }

    // Hàm để giảm giá trị count
    const decrement = () => {
        if (count < 0) return
        setCount(count - 1)
    }

    setCount((prevCount) => prevCount + 1)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}
