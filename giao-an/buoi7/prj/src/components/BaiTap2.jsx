import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import InputField from "./InputField"

export default function BaiTap2() {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])

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
            alert("Đặt hàng thành công!")
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
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Thông tin đặt hàng</h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Name */}
                <InputField name="name" label="Họ và tên" formik={formik} />

                {/* Phone */}
                <InputField name="phone" label="Số điện thoại" formik={formik} />

                {/* Province */}
                <InputField name="province" label="Tỉnh/Thành phố" formik={formik} />

                {/* District */}
                <InputField name="district" label="Quận/Huyện" formik={formik} />
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quận/Huyện <span className="text-red-500">*</span>
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
                        {districts.map((district) => (
                            <option key={district.code} value={district.code}>
                                {district.name}
                            </option>
                        ))}
                    </select>
                    {formik.touched.district && formik.errors.district && <p className="text-red-500 text-sm mt-1">{formik.errors.district}</p>}
                </div>

                {/* Ward */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phường/Xã <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="ward"
                        value={formik.values.ward}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={!formik.values.district}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    >
                        <option value="">Chọn phường/xã</option>
                        {wards.map((ward) => (
                            <option key={ward.code} value={ward.code}>
                                {ward.name}
                            </option>
                        ))}
                    </select>
                    {formik.touched.ward && formik.errors.ward && <p className="text-red-500 text-sm mt-1">{formik.errors.ward}</p>}
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
        </div>
    )
}
