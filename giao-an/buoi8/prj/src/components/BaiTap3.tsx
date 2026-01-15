import React, { useEffect, useState } from "react"
interface Address {
    name: string
    code: number
}
export default function BaiTap3() {
    const [provinces, setProvinces] = useState<Address[]>([])
    const [districts, setDistricts] = useState<Address[]>([])
    const [wards, setWards] = useState<Address[]>([])
    const [selectedAddress, setSelectedAddress] = useState({
        province: "",
        district: "",
        ward: "",
    })

    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then((res) => res.json())
            .then((data) => setProvinces(data))
            .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        if (selectedAddress.province) {
            fetch(`https://provinces.open-api.vn/api/p/${selectedAddress.province}?depth=2`)
                .then((res) => res.json())
                .then((data) => setDistricts(data.districts))
                .catch((err) => console.error(err))
        }
    }, [selectedAddress.province])
    useEffect(() => {
        if (selectedAddress.district) {
            fetch(`https://provinces.open-api.vn/api/d/${selectedAddress.district}?depth=2`)
                .then((res) => res.json())
                .then((data) => setWards(data.wards))
                .catch((err) => console.error(err))
        }
    }, [selectedAddress.district])

    const handleChangeAddress = (key: string, value: string) => {
        setSelectedAddress({ ...selectedAddress, [key]: value })
    }
    console.log(selectedAddress)
    return (
        <div className="p-10 max-w-xl mx-auto space-y-5">
            <div className="space-y-2 ">
                <p>Chọn tỉnh/thành</p>
                <select
                    value={selectedAddress.province}
                    onChange={(e) => handleChangeAddress("province", e.target.value)}
                    disabled={provinces.length === 0}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                >
                    <option value="">Chọn Tỉnh/thành</option>
                    {provinces.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="space-y-2 ">
                <p>Chọn quận/huyện</p>
                <select
                    value={selectedAddress.district}
                    onChange={(e) => handleChangeAddress("district", e.target.value)}
                    disabled={selectedAddress.province === ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                >
                    <option value="">Chọn Quận/huyện</option>
                    {districts.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="space-y-2 ">
                <p>Chọn phường/xã</p>
                <select
                    value={selectedAddress.ward}
                    onChange={(e) => handleChangeAddress("ward", e.target.value)}
                    disabled={selectedAddress.district === ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                >
                    <option value="">Chọn Phường/xã</option>
                    {wards.map((item) => (
                        <option key={item.code} value={item.code}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex gap-5 items-center text-2xl font-medium mt-10">
                <p>{JSON.stringify(selectedAddress)}</p>
            </div>
        </div>
    )
}
