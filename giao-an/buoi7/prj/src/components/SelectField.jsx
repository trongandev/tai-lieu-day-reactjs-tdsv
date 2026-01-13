import React from "react"

const SelectField = ({ label, data, formik, ...props }) => {
    return (
        <div className="space-y-1">
            <label htmlFor="name" className="block">
                {label}
            </label>
            <select
                name="district"
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!formik.values.province}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            >
                <option value="">Chọn quận/huyện</option>
                {data.map((district) => (
                    <option key={district.code} value={district.code}>
                        {district.name}
                    </option>
                ))}
            </select>
            {formik.touched[props.name] && formik.errors[props.name] ? <div className="text-red-500">{formik.errors[props.name]}</div> : null}
        </div>
    )
}

export default SelectField
