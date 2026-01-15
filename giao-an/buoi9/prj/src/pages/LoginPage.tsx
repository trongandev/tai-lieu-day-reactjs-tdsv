import { useFormik } from "formik"
import React from "react"
import Button from "../components/Button"
import InputField from "../components/InputField"
import * as Yup from "yup"
import Swal from "sweetalert2"
import type { User } from "../types/user"
export default function LoginPage() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email không hợp lệ").required("Email không được để trống"),
            password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Mật khẩu không được để trống"),
        }),
        onSubmit: (values) => {
            console.log("Login info", values)
            const users_data = JSON.parse(localStorage.getItem("users_data") || "[]")
            const user = users_data.find((user: User) => user.email === values.email && user.password === values.password)
            if (user) {
                Swal.fire("Đăng nhập thành công", "", "success").then(() => {
                    localStorage.setItem("current_user", JSON.stringify(user))
                    window.location.href = "/"
                })
            } else {
                Swal.fire("Email hoặc mật khẩu không đúng", "", "error")
            }
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className="space-y-5">
            <h1 className="text-2xl text-center">Login page</h1>
            <InputField label="Email" formik={formik} name="email"></InputField>
            <InputField label="Mật khẩu" formik={formik} name="password" type="password"></InputField>
            <Button>Đăng nhập</Button>
            <div className="border-t border-t-gray-200 mt-5 pt-5">
                Bạn chưa có tài khoản?{" "}
                <a href="/auth/register" className="text-blue-500">
                    Đăng ký ngay
                </a>
            </div>
        </form>
    )
}
