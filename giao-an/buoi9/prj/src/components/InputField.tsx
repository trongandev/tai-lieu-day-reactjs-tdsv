import Input from "./Input"

export default function InputField({ label, formik, ...props }: any) {
    return (
        <div className="space-y-1">
            <label htmlFor="name" className="block">
                {label}
            </label>
            <Input type="text" name={props.name} placeholder={"Nhập " + label + " ..."} {...props} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values[props.name]} />
            {formik.touched[props.name] && formik.errors[props.name] ? <div className="text-red-500">{formik.errors[props.name]}</div> : null}
        </div>
    )
}
