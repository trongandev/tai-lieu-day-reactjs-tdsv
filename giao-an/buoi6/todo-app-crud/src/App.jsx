import { useState } from "react"

import Button from "./components/Button"
import Input from "./components/Input"

function App() {
    const [students, setStudents] = useState([])
    const [form, setForm] = useState({ id: "", name: "", score: "" })
    const [isEditing, setIsEditing] = useState(false)

    const handleAdd = () => {
        if (!form.name || !form.score) return
        const newStudent = {
            id: Date.now().toString(),
            name: form.name,
            score: parseFloat(form.score),
        }
        setStudents([...students, newStudent])
        setForm({ id: "", name: "", score: "" })
    }

    const handleDelete = (id) => {
        setStudents(students.filter((s) => s.id !== id))
    }

    const handleEdit = (student) => {
        setForm({ id: student.id, name: student.name, score: student.score })
        setIsEditing(true)
    }

    const handleUpdate = () => {
        setStudents(students.map((s) => (s.id === form.id ? { ...s, name: form.name, score: parseFloat(form.score) } : s)))
        setForm({ id: "", name: "", score: "" })
        setIsEditing(false)
    }

    const getAverage = () => {
        if (students.length === 0) return 0
        return (students.reduce((sum, s) => sum + s.score, 0) / students.length).toFixed(2)
    }

    const getClassification = (score) => {
        if (score >= 8) return "Giỏi"
        if (score >= 6.5) return "Khá"
        if (score >= 5) return "Trung bình"
        if (score >= 2.5) return "Yếu"
        return "Kém"
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quản lý sinh viên</h1>

                {/* Form nhập liệu */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* <Input type="text" placeholder="Mã sinh viên" value={form.id} disabled={isEditing} className="px-4 py-2 border rounded-lg" /> */}
                        <Input type="text" placeholder="Tên sinh viên" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-2 border rounded-lg" />
                        <Input
                            type="number"
                            placeholder="Điểm"
                            value={form.score}
                            onChange={(e) => setForm({ ...form, score: e.target.value })}
                            className="px-4 py-2 border rounded-lg"
                            min="0"
                            max="10"
                            step="0.1"
                        />
                    </div>
                    <div className="flex gap-2">
                        {isEditing ? (
                            <>
                                <Button onClick={handleUpdate} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                                    Cập nhật
                                </Button>
                                <Button
                                    onClick={() => {
                                        setForm({ id: "", name: "", score: "" })
                                        setIsEditing(false)
                                    }}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Hủy
                                </Button>
                            </>
                        ) : (
                            <Button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                                Thêm sinh viên
                            </Button>
                        )}
                    </div>
                </div>

                {/* Thống kê */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-lg font-semibold text-gray-700">
                        Điểm trung bình lớp: <span className="text-blue-600">{getAverage()}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                        Tổng số sinh viên: <span className="text-blue-600">{students.length}</span>
                    </p>
                </div>

                {/* Danh sách sinh viên */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-3 text-left">Mã SV</th>
                                <th className="border p-3 text-left">Tên sinh viên</th>
                                <th className="border p-3 text-left">Điểm</th>
                                <th className="border p-3 text-left">Xếp loại</th>
                                <th className="border p-3 text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="border p-3">{student.id}</td>
                                    <td className="border p-3">{student.name}</td>
                                    <td className="border p-3">{student.score}</td>
                                    <td className="border p-3">
                                        <span
                                            className={`px-2 py-1 rounded ${
                                                student.score >= 8 ? "bg-green-200 text-green-800" : student.score >= 6.5 ? "bg-blue-200 text-blue-800" : "bg-yellow-200 text-yellow-800"
                                            }`}
                                        >
                                            {getClassification(student.score)}
                                        </span>
                                    </td>
                                    <td className="border p-3 text-center">
                                        <Button onClick={() => handleEdit(student)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2">
                                            Sửa
                                        </Button>
                                        <Button onClick={() => handleDelete(student.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {students.length === 0 && <p className="text-center text-gray-500 py-4">Chưa có sinh viên nào</p>}
                </div>
            </div>
        </div>
    )
}

export default App
