import React, { useState,useContext } from "react";
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { isToggleSidebar } from "../../utils/redux/sideBarToggle/SideBartoggle";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrDashboard } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";


const SidebarPage = () => {
    const dispatch = useDispatch();
    const isToggle = useSelector((store) => store.sidebarToggle);
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => {
        dispatch(isToggleSidebar());
        setIsOpen(!isOpen);
    };

    const getActiveClass = (path) => {
        return location.pathname === path
            ? "bg-gray-400 text-white"
            : "hover:bg-gray-700 hover:text-white";
    };

    return (
        <div className="flex">
            <div
                className={`fixed inset-y-0 left-0 transition-all duration-500 ease-in-out ${isOpen ? "w-64" : "w-20"
                    } bg-white shadow-xl font-bold text-black p-5 overflow-hidden`}
                style={{
                    transform: isOpen ? "translateX(0)" : "translateX(2)",
                }}
            >
                <button onClick={toggleSidebar} className="text-right mb-4 ml-[10px]">
                    {isOpen ? <IoMdClose size={20}/> : <IoReorderThree size={20}/>}
                </button>

                {isToggle?.toggle && isOpen && (
                    <div onClick={() => navigate("/dashboard")} className="ml-12 md:w-[200px] flex items-center mb-4 cursor-pointer">
                        <img
                            src="/logo.png"
                            alt="LOGO"
                            className=""
                            width={100}
                        />
                    </div>
                )}

                <nav className="space-y-4">
                    <Link
                        to="/dashboard"
                        className={`block py-2 px-3 rounded-md ${getActiveClass(
                            "/dashboard"
                        )}`}
                    >
                        {isOpen ? "Dashboard" : <GrDashboard size={20}/>}
                    </Link>
                    <Link
                        to="/users"
                        className={`block py-2 px-3 rounded-md ${getActiveClass(
                            "/users"
                        )}`}
                    >
                        {isOpen ? "Users" : <LuUsers size={20}/>}
                    </Link>
                    <Link
                        to="/verification-requests"
                        className={`block py-2 px-3 rounded-md ${getActiveClass(
                            "/verification-requests"
                        )}`}
                    >
                        {isOpen ? "Verification Requests" : <FaUserCheck size={20}/>}
                    </Link>
                    <Link
                        to="/settings"
                        className={`block py-2 px-3 rounded-md ${getActiveClass(
                            "/settings"
                        )}`}
                    >
                        {isOpen ? "Settings" : <IoSettings size={20}/>}
                    </Link>
                </nav>
            </div>

            <div className="flex-1 p-4 ml-[10px]">
                <button onClick={toggleSidebar}>
                    {isOpen ? <IoMdClose /> : <IoReorderThree />}
                </button>
            </div>
        </div>
    );
};

export default SidebarPage;
