import React, { useState } from "react"
import InputField from "./InputField"
import Button from "./Button"
import { useFormik } from "formik"
import * as Yup from "yup"
export default function BaiTap1() {
    const [json, setJson] = useState("")
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, "Tên phải có ít nhất 2 ký tự").required("Bắt buộc"),
            email: Yup.string().email("Email không hợp lệ").required("Bắt buộc"),
            password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Bắt buộc"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
                .required("Bắt buộc"),
        }),
        onSubmit: (values) => {
            console.log(values)
            setJson(values)
        },
    })
    return (
        <div className="bg-gray-50 max-w-xl mx-auto p-10 rounded-xl my-20 shadow">
            <h1 className="text-2xl font-bold text-center mb-10">Đăng ký thành viên</h1>
            <form onSubmit={formik.handleSubmit} className="space-y-3">
                <InputField label="Họ tên:" name="name" placeholder="Nhập họ và tên..." formik={formik}></InputField>
                <InputField label="Email:" name="email" placeholder="Nhập email..." formik={formik}></InputField>
                <InputField label="Mật khẩu:" name="password" type="password" placeholder="Nhập mật khẩu..." formik={formik}></InputField>
                <InputField label="Nhập lại mật khẩu:" name="confirmPassword" type="password" placeholder="Nhập lại mật khẩu..." formik={formik}></InputField>

                <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
                    Đăng ký
                </Button>
            </form>
            {json && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                    <h2 className="font-bold mb-2">Dữ liệu đăng ký:</h2>
                    <pre className="whitespace-pre-wrap break-all">{JSON.stringify(json, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}
