import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import InputField from "./InputField"
import SelectField from "./SelectField"

export default function BaiTap2() {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])
    const [json, setJson] = useState("")
    // Fetch provinces
    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then((res) => res.json())
            .then((data) => setProvinces(data))
            .catch((err) => console.error(err))
    }, [])

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Tên phải có ít nhất 3 ký tự").required("Vui lòng nhập tên"),
        phone: Yup.string()
            .matches(/^[0-9]+$/, "Số điện thoại phải là số")
            .min(10, "Số điện thoại phải có ít nhất 10 số")
            .required("Vui lòng nhập số điện thoại"),
        province: Yup.string().required("Vui lòng chọn tỉnh/thành phố"),
        district: Yup.string().required("Vui lòng chọn quận/huyện"),
        ward: Yup.string().required("Vui lòng chọn phường/xã"),
        paymentMethod: Yup.string().required("Vui lòng chọn phương thức thanh toán"),
        note: Yup.string(),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            province: "",
            district: "",
            ward: "",
            paymentMethod: "COD",
            note: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form data:", values)
            setJson(values)
        },
    })

    // Fetch districts when province changes
    useEffect(() => {
        if (formik.values.province) {
            fetch(`https://provinces.open-api.vn/api/p/${formik.values.province}?depth=2`)
                .then((res) => res.json())
                .then((data) => {
                    setDistricts(data.districts || [])
                    setWards([])
                    formik.setFieldValue("district", "")
                    formik.setFieldValue("ward", "")
                })
                .catch((err) => console.error(err))
        }
    }, [formik.values.province])

    // Fetch wards when district changes
    useEffect(() => {
        if (formik.values.district) {
            fetch(`https://provinces.open-api.vn/api/d/${formik.values.district}?depth=2`)
                .then((res) => res.json())
                .then((data) => {
                    setWards(data.wards || [])
                    formik.setFieldValue("ward", "")
                })
                .catch((err) => console.error(err))
        }
    }, [formik.values.district])

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Thông tin đặt hàng</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Name */}
                <InputField name="name" label="Họ và tên" formik={formik} />

                {/* Phone */}
                <InputField name="phone" label="Số điện thoại" formik={formik} />

                {/* Province */}

                <div className="grid grid-cols-3 gap-2 items-center">
                    <SelectField name="province" label="Tỉnh/Thành phố" data={provinces} formik={formik} disabled={false} />

                    {/* District */}

                    <SelectField name="district" label="Quận/Huyện" data={districts} formik={formik} disabled={!formik.values.province} />

                    {/* Ward */}

                    <SelectField name="ward" label="Phường/Xã" data={wards} formik={formik} disabled={!formik.values.district} />
                </div>

                {/* Payment Method */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phương thức thanh toán <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input type="radio" name="paymentMethod" value="COD" checked={formik.values.paymentMethod === "COD"} onChange={formik.handleChange} className="mr-2" />
                            <span>Thanh toán khi nhận hàng (COD)</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="paymentMethod" value="Banking" checked={formik.values.paymentMethod === "Banking"} onChange={formik.handleChange} className="mr-2" />
                            <span>Chuyển khoản ngân hàng</span>
                        </label>
                    </div>
                </div>

                {/* Note */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                    <textarea
                        name="note"
                        value={formik.values.note}
                        onChange={formik.handleChange}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ghi chú thêm về đơn hàng..."
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium">
                    Đặt hàng
                </button>
            </form>
            {json && <pre className="mt-4 p-4 bg-gray-100 rounded-md text-sm overflow-x-auto">{JSON.stringify(json, null, 2)}</pre>}
        </div>
    )
}
