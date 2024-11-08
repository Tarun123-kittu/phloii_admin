import React, { useState } from "react";
import { IonIcon } from "@ionic/react"; 
import { menuOutline } from "ionicons/icons";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

const HeaderPage = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isToggle = useSelector((store) => store.sidebarToggle)
    const onMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative shadow-md h-20">
            <nav className="flex justify-between">
                <div onClick={() => navigate("/dashboard")} className="ml-4 md:w-[200px] flex items-center cursor-pointer">
                    {!isToggle?.toggle && <img
                        src="/logo.png"
                        alt="LOGO"
                        className=""
                        width={100}
                    />}
                </div>
                <div className="flex items-center gap-3">
                    <div
                        className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-0 px-5 md:py-0 py-5 ${isMenuOpen ? "left-0" : "left-[-100%]"
                            }`}
                    >
                    </div>
                    <div className="flex gap-2 p-[19px] ">
                        
                        <button
                            type="button"
                            className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 rounded-full"
                        >
                            Sign Out
                        </button>
                        <IonIcon
                            icon={menuOutline}
                            onClick={onMenuToggle}
                            className="text-[30px] cursor-pointer md:hidden"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderPage;
