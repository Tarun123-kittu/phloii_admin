import React,{useEffect} from "react";
import Analytics from "../../pages/dashboard/Anaylitics";
import LineGraph from "../../pages/dashboard/LineGraph";
import TotalUsers from "../../pages/dashboard/TotalUsers";
import VerificationRequestCount from "../../pages/dashboard/VerificationRequestCount";
import VerificationRequests from "../verificationRequests/VerificationRequests";
import NewVerificationRequests from "../../pages/dashboard/NewVerificationRequests";

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard";
      }, []);
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="p-6 grid gap-10 grid-cols-2 md:grid-cols-3">
                <div className="p-2 bg-white rounded-lg shadow-lg flex justify-center items-center h-32">
                    <TotalUsers />
                </div>

                <div className="p-2 bg-white rounded-lg shadow-lg h-32">
                    <VerificationRequestCount />
                </div>

                <div className="p-2 bg-white rounded-lg shadow-lg h-32">
                    <NewVerificationRequests />
                </div>
            </div>

            <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-[50%_50%]">
                <div className="p-4 bg-white rounded-lg shadow-lg mt-4">
                    <h2 className="text-xl font-semibold mb-4">New Verification Requests</h2>
                    <VerificationRequests hide={true}/>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg mt-4 mr-4">
                    <h2 className="text-xl font-semibold mb-4">Active users</h2>
                    <VerificationRequests hide={true}/>
                </div>
            </div>

            <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%]">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Analytics</h2>
                    <Analytics />
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg mr-4">
                    <LineGraph />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
