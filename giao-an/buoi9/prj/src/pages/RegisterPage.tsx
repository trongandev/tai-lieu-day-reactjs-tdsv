import { useFormik } from "formik"
import React from "react"
import Button from "../components/Button"
import InputField from "../components/InputField"
import * as Yup from "yup"
import Swal from "sweetalert2"
import type { User } from "../types/user"
export default function RegisterPage() {
    const formik = useFormik({
        initialValues: {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            displayName: Yup.string().required("Tên đăng nhập không được để trống"),
            email: Yup.string().email("Email không hợp lệ").required("Email không được để trống"),
            password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Mật khẩu không được để trống"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không khớp")
                .required("Vui lòng nhập lại mật khẩu"),
        }),
        onSubmit: (values) => {
            const users_data = JSON.parse(localStorage.getItem("users_data") || "[]")
            const user = users_data.find((user: User) => user.email === values.email)
            if (user) {
                Swal.fire("Email đã được đăng ký", "", "error")
            } else {
                users_data.push({
                    id: Date.now(),
                    displayName: values.displayName,
                    email: values.email,
                    password: values.password,
                })
                localStorage.setItem("users_data", JSON.stringify(users_data))
                Swal.fire("Đăng ký thành công", "", "success").then(() => {
                    window.location.href = "/auth/login"
                })
            }
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className="space-y-5">
            <h1 className="text-2xl text-center">Register page</h1>
            <InputField label="Tên đăng nhập" formik={formik} name="displayName"></InputField>
            <InputField label="Email" formik={formik} name="email"></InputField>
            <InputField label="Mật khẩu" formik={formik} name="password" type="password"></InputField>
            <InputField label="Nhập lại Mật khẩu" formik={formik} name="confirmPassword" type="password"></InputField>
            <Button>Đăng ký</Button>
            <div className="border-t border-t-gray-200 mt-5 pt-5">
                Bạn đã có tài khoản?{" "}
                <a href="/auth/login" className="text-blue-500">
                    Đăng nhập ngay
                </a>
            </div>
        </form>
    )
}
