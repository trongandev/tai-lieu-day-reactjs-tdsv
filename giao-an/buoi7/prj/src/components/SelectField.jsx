import React from "react"

const SelectField = ({ label, name, data, disabled, formik }) => {
    return (
        <div className="space-y-1">
            <label htmlFor={name} className="block">
                {label} <span className="text-red-500">*</span>
            </label>
            <select
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={disabled}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            >
                <option value="">Chọn {label.toLowerCase()}</option>
                {data.map((item) => (
                    <option key={item.code} value={item.code}>
                        {item.name}
                    </option>
                ))}
            </select>
            {formik.touched[name] && formik.errors[name] ? <div className="text-red-500">{formik.errors[name]}</div> : null}
        </div>
    )
}

export default SelectField
