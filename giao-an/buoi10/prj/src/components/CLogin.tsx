import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import InputField from "./InputField"
import { Button } from "./ui/button"
import { useUser } from "@/contexts/userContext"
import { useNavBar } from "@/contexts/navBarContext"
export default function CLogin() {
    const { login } = useUser()
    const { isOpen } = useNavBar()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required").min(6, "Password must be at least 6 characters"),
        }),
        onSubmit: (values) => {
            console.log(values)
            login(values)
            formik.resetForm()
        },
    })
    return (
        <div className={`${isOpen ? "translate-x-0 opacity-100 w-1/3" : "-translate-x-[200%] opacity-0 w-0"} transition-all duration-300 bg-red-50 p-5 space-y-5 border-2 border-red-500`}>
            <h1>CLogin</h1>
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <InputField formik={formik} name="username" placeholder="Username" />
                <InputField formik={formik} name="password" placeholder="Password" type="password" />
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}
