import React, { useState } from "react"
import { Search, MapPin, Thermometer, Droplets, Cloud } from "lucide-react"
import Button from "./Button"
import LoadingIcon from "./LoadingIcon"

interface Weather {
    coord: {
        lon: number
        lat: number
    }
    weather: Array<{
        id: number
        main: string
        description: string
        icon: string
    }>
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

export default function BaiTap2() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState<Weather | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const API_KEY = "e04cc27627999a91e1158587a67cbc02" // Thay bằng API key của bạn

    const fetchWeather = async (cityName: string) => {
        setLoading(true)
        setError("")
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            if (!response.ok) {
                throw new Error("City not found")
            }
            const data: Weather = await response.json()
            setWeather(data)
        } catch (err) {
            setError("Không tìm thấy thành phố. Vui lòng thử lại!")
            setWeather(null)
        } finally {
            setLoading(false)
        }
    }

    const fetchWeatherByCoords = async (lat: number, lon: number) => {
        setLoading(true)
        setError("")
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            if (!response.ok) {
                throw new Error("Unable to fetch weather")
            }
            const data: Weather = await response.json()
            setWeather(data)
        } catch (err) {
            setError("Không thể lấy dữ liệu thời tiết!")
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (city.trim()) {
            fetchWeather(city)
        }
    }

    const getCurrentLocation = () => {
        setLoading(true)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeatherByCoords(position.coords.latitude, position.coords.longitude)
                },
                () => {
                    setError("Không thể lấy vị trí của bạn!")
                }
            )
        } else {
            setError("Trình duyệt không hỗ trợ Geolocation!")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
                {/* Search Box */}
                <div className="backdrop-blur-md bg-white/20 rounded-3xl shadow-2xl p-8 border border-white/30">
                    <h1 className="text-3xl font-bold text-white mb-6 text-center">Weather App</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Nhập tên thành phố..."
                                className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="flex-1 bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/40"
                            >
                                <Search size={20} />
                                Get Weather
                            </button>

                            <Button
                                type="button"
                                onClick={getCurrentLocation}
                                disabled={loading}
                                className="bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-white/40"
                            >
                                {loading ? <LoadingIcon /> : <MapPin size={20} />}
                            </Button>
                        </div>
                    </form>

                    {loading && <p className="text-white text-center mt-6 animate-pulse">Đang tải...</p>}

                    {error && <p className="text-red-200 text-center mt-6 bg-red-500/30 backdrop-blur-sm rounded-xl p-3">{error}</p>}
                </div>

                {/* Weather Info */}
                {weather && !loading && (
                    <div className="backdrop-blur-md bg-white/20 rounded-3xl shadow-2xl p-8 border border-white/30 mt-6">
                        <h2 className="text-2xl font-bold text-white mb-4 text-center">
                            {weather.name}, {weather.sys.country}
                        </h2>

                        <div className="flex items-center justify-center mb-6">
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} className="w-32 h-32" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                <div className="flex items-center gap-3">
                                    <Thermometer className="text-white" size={24} />
                                    <span className="text-white font-medium">Nhiệt độ</span>
                                </div>
                                <span className="text-white text-2xl font-bold">{Math.round(weather.main.temp)}°C</span>
                            </div>

                            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                <div className="flex items-center gap-3">
                                    <Cloud className="text-white" size={24} />
                                    <span className="text-white font-medium">Mô tả</span>
                                </div>
                                <span className="text-white capitalize">{weather.weather[0].description}</span>
                            </div>

                            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                <div className="flex items-center gap-3">
                                    <Droplets className="text-white" size={24} />
                                    <span className="text-white font-medium">Độ ẩm</span>
                                </div>
                                <span className="text-white text-xl font-bold">{weather.main.humidity}%</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
