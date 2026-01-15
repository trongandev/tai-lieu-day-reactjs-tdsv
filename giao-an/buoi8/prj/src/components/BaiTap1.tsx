import { Box, Globe, Mail, Phone, User } from "lucide-react"
import React, { useEffect, useState } from "react"

interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

interface Company {
    name: string
    catchPhrase: string
    bs: string
}

interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

interface Geo {
    lat: string
    lng: string
}

export default function BaiTap1() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()
                console.log(data)
                if (data.length > 0) {
                    // setTimeout(() => {
                    //     setUsers(data)
                    //     setLoading(false)
                    // }, 2000)
                    setUsers([])
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            } finally {
                console.log("good")
            }
        }
        fetchUser()
    }, [])
    return (
        <div className="p-10">
            <div className="grid  grid-cols-3 xl:grid-cols-5 gap-5">
                {loading && (
                    <div className=" flex items-center col-span-full h-screen justify-center">
                        <div className=" h-16 w-16 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin "></div>
                    </div>
                )}
                {!loading && users.length === 0 && (
                    <div className="col-span-full h-screen flex flex-col gap-5 items-center justify-center text-center  text-2xl text-gray-700">
                        <Box size={100} />
                        <p>No users found...</p>
                    </div>
                )}
                {users.map((user) => (
                    <div key={user.id} className="bg-gray-50 rounded-md border border-gray-200 text-gray-600 shadow-sm">
                        <div className="flex items-center gap-3 bg-gray-200/50  p-5 rounded-t-md border-b border-gray-200">
                            <User />
                            <h1 className="text-xl font-medium text-gray-800">{user.name}</h1>
                        </div>
                        <div className="space-y-2  p-5">
                            <p className="flex gap-3 items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-200/50 text-gray-600 rounded-xl">
                                    <Mail size={16} />
                                </div>
                                {user.email}
                            </p>
                            <p className="flex gap-3 items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-200/50 text-gray-500 rounded-xl">
                                    <Phone size={16} />
                                </div>
                                {user.phone}
                            </p>
                            <p className="flex gap-3 items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-200/50 text-gray-500 rounded-xl">
                                    <Globe size={16} />
                                </div>
                                {user.website}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
