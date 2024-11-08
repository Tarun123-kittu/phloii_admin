import React from "react"
import ActiveUserGraph from "./ActiveUserGraph"

const VerificationRequestCount = () => {
    return (
        <div className="flex gap-4">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-500">Active Users</h2>
                <p className="text-3xl font-bold text-red-400">2500</p>
            </div>
            <div className="text-center">
                <ActiveUserGraph />
            </div>
        </div>
    )
}

export default VerificationRequestCount