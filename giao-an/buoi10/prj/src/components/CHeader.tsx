import { useUser } from "@/contexts/userContext"
import React, { useState } from "react"
import { Button } from "./ui/button"
import { Edit, PanelLeft } from "lucide-react"
import { useFormik } from "formik"
import * as Yup from "yup"
import InputField from "./InputField"
import { useNavBar } from "@/contexts/navBarContext"
export default function CHeader() {
    const { user, logout, update } = useUser()
    const { toggle } = useNavBar()
    const [isEdit, setIsEdit] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: user?.username || "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
        }),

        onSubmit: (values) => {
            console.log("Updated user:", values)
            setIsEdit(false)
        },
    })

    const handleEdit = () => {
        setIsEdit(true)
        formik.setValues({ username: user?.username || "" })
    }

    const handleUpdate = () => {
        update(formik.values.username)
        setIsEdit(false)
    }
    return (
        <div className="p-5 bg-gray-200 w-full  border-2 border-gray-500">
            <div className="flex gap-5 items-center">
                <PanelLeft onClick={toggle} />
                <p className="text-2xl font-bold">CHeader</p>
            </div>
            <div className="">
                {user ? (
                    <div className="">
                        {!isEdit ? (
                            <div className="flex gap-5 items-center">
                                <p>Name: {user.username}</p>
                                <Button onClick={handleEdit}>
                                    <Edit />
                                </Button>
                                {user ? (
                                    <Button className="" variant={"destructive"} onClick={logout}>
                                        Logout
                                    </Button>
                                ) : null}
                            </div>
                        ) : (
                            <div className="mt-5">
                                <form action="" onSubmit={formik.handleSubmit} className=" mb-5">
                                    <InputField formik={formik} name="username" className="border-gray-400"></InputField>
                                </form>
                                <div className="flex gap-5">
                                    <Button onClick={() => setIsEdit(false)}>Cancel</Button>
                                    <Button onClick={handleUpdate}>Save</Button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>You not login</p>
                )}
            </div>
        </div>
    )
}
