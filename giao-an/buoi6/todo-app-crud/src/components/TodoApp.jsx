import { useState } from "react"

import "./App.css"
import Button from "./components/Button"
import Input from "./components/Input"

export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [inputEditValue, setEditInputValue] = useState(null)

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            }
            setTodos([...todos, newTodo])
            setInputValue("")
        }
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
    }

    const saveEditTodo = () => {
        setTodos(todos.map((todo) => (todo.id === inputEditValue.id ? { ...todo, text: inputEditValue.text } : todo)))
        setEditInputValue(null)
    }

    // const toggleTodo = (id) => {
    //     todos.map((todo) => {
    //         if (todo.id === id) {
    //             todo.completed = !todo.completed
    //         }
    //         return todo
    //     })
    //     setTodos([...todos])
    // }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo App</h1>

                <div className="flex gap-2 mb-4">
                    <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && addTodo()} placeholder="Thêm công việc mới..." />
                    <Button onClick={addTodo} variant="primary">
                        Thêm
                    </Button>
                </div>

                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                            {inputEditValue?.id === todo.id ? (
                                <div className="w-full">
                                    <Input
                                        type="text"
                                        className="w-full"
                                        placeholder="Nhập công việc..."
                                        value={inputEditValue.text}
                                        onChange={(e) => setEditInputValue({ ...inputEditValue, text: e.target.value })}
                                    />
                                    <div className="flex gap-3 mt-2">
                                        <Button variant="secondary" onClick={() => setEditInputValue(null)}>
                                            Hủy
                                        </Button>
                                        <Button onClick={saveEditTodo}>Lưu</Button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="w-5 h-5 cursor-pointer" />
                                    <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`} onClick={() => setEditInputValue(todo)}>
                                        {todo.text}
                                    </span>
                                    <Button onClick={() => deleteTodo(todo.id)} variant="danger" size="sm">
                                        Xóa
                                    </Button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>

                {todos.length === 0 && <p className="text-center text-gray-400 mt-4">Chưa có công việc nào</p>}
            </div>
        </div>
    )
}
