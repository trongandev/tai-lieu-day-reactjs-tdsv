import { Edit, Save } from "lucide-react"
import type { User } from "../types/user"
import Button from "./Button"
import { useState } from "react"
import Input from "./Input"
import InputField from "./InputField"
import { useFormik } from "formik"
import * as Yup from "yup"
export default function ProfileUser({ user, isCurrentUser = false }: { user: User; isCurrentUser?: boolean }) {
    const [editUser, setEditUser] = useState<User>(user)
    const [isEditUser, setIsEditUser] = useState(false)
    const formik = useFormik({
        initialValues: {
            displayName: editUser ? editUser.displayName : user.displayName,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            displayName: Yup.string().required("Tên hiển thị không được để trống"),
        }),
        onSubmit: (values) => {
            if (editUser) {
                const storedUsers = localStorage.getItem("users_data")
                const users: User[] = storedUsers ? JSON.parse(storedUsers) : []
                const updatedUsers = users.map((u) => {
                    if (u.id === editUser.id) {
                        return { ...u, displayName: values.displayName }
                    }
                    return u
                })
                localStorage.setItem("users_data", JSON.stringify(updatedUsers))
                localStorage.setItem("current_user", JSON.stringify({ ...editUser, displayName: values.displayName }))
                setIsEditUser(false)
                window.location.reload()
            }
        },
    })
    return (
        <>
            {user ? (
                <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200 flex gap-10 items-center">
                    <div className="w-32 h-32 flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-4xl font-bold rounded-full">
                        {user.displayName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                    </div>
                    <div className="flex-1 flex justify-between items-center">
                        <form className="" onSubmit={formik.handleSubmit}>
                            {isEditUser ? (
                                <div className="">
                                    <InputField label="Tên hiển thị" name="displayName" formik={formik} />
                                    <div className="mt-3 flex gap-2">
                                        <Button>
                                            <Save size={20} /> Lưu
                                        </Button>
                                        <Button variant="secondary" type="button" onClick={() => setIsEditUser(false)}>
                                            Hủy
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="text-2xl font-medium mb-2">{user.displayName}</div>
                                    <div>{user.email}</div>
                                </>
                            )}
                        </form>
                        {isCurrentUser && !isEditUser && (
                            <Button className="text-sm text-gray-500" onClick={() => setIsEditUser(true)}>
                                <Edit size={18} />
                                Chỉnh sửa profile
                            </Button>
                        )}
                    </div>
                </div>
            ) : (
                <div>Không tìm thấy user</div>
            )}
        </>
    )
}
