import { useFormik } from "formik"
import * as Yup from "yup"

export default function test() {
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: Yup.object({
            email: Yup.string().email("Email sai").required("Bắt buộc"),
        }),
        onSubmit: (values) => {
            console.log("values")
        },
    })

    return (
        <>
            <input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </>
    )
}
