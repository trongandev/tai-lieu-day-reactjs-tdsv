import React from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function InputField({ formik, ...props }: { formik: any } & React.InputHTMLAttributes<HTMLInputElement>) {
    if (!props.name) return null

    return (
        <div className="space-y-2">
            <Label htmlFor={props.name}>{props.name}</Label>
            <Input name={props.name} placeholder={props.placeholder} {...props} value={formik.values[props.name]} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched[props.name] && formik.errors[props.name] ? <div className="text-red-500 text-sm">{formik.errors[props.name]}</div> : null}
        </div>
    )
}
