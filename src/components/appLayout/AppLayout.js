import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import SideBar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";
const AppLayout = () => {
    const isToggle = useSelector((store) => store.sidebarToggle)
    return (
        <>
            <div className={isToggle?.toggle ? " transition-all duration-300 w-[87%] ml-auto" : "w-[96%] ml-auto"}>
                <Header />
            </div>
            <div  >
                <SideBar  />
            </div>
            <div className={`${isToggle?.toggle ? "w-[86%] ml-auto" : "w-[94%] ml-auto"
                } transition-all duration-500 ease-in-out`}>
                <Outlet />
            </div>
        </>
    )
}

export default AppLayout