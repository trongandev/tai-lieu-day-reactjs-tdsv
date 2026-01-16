import React from "react"

export default function FootballSchedule() {
    return (
        <div className="border border-gray-200 bg-white flex items-center p-5 rounded-lg shadow-md w-full">
            <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                    <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/vm-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                    <p>U-23 Việt Nam</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/ue-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                    <p>U-23 UAE</p>
                </div>
            </div>
            <div className="border-l border-gray-200 px-10 text-center">
                <h1>Ngày mai</h1>
                <p>22:30</p>
            </div>
        </div>
    )
}
