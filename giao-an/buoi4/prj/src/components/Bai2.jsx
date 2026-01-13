import React from "react"

export default function Bai2() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                {/* Basic Plan */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Basic</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">$9</span>
                        <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>10 Projects</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>5GB Storage</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Basic Support</span>
                        </li>
                    </ul>
                    <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">Get Started</button>
                </div>

                {/* Pro Plan - Featured */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-2xl p-8 lg:scale-110 lg:z-10 text-white">
                    <div className="bg-yellow-400 text-gray-900 text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">POPULAR</div>
                    <h3 className="text-2xl font-bold mb-4">Pro</h3>
                    <div className="mb-6">
                        <span className="text-5xl font-bold">$29</span>
                        <span>/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center">
                            <span className="mr-2">✓</span>
                            <span>Unlimited Projects</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">✓</span>
                            <span>50GB Storage</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">✓</span>
                            <span>Priority Support</span>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">✓</span>
                            <span>Advanced Analytics</span>
                        </li>
                    </ul>
                    <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Get Started</button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h3>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">$99</span>
                        <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Unlimited Everything</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>500GB Storage</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>24/7 Support</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Custom Integrations</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Dedicated Manager</span>
                        </li>
                    </ul>
                    <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">Contact Sales</button>
                </div>
            </div>
        </div>
    )
}
