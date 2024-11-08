import React,{useState} from "react"
import GlobalSexualOrientation from "./GlobalSexualOrientation"
import GlobalCommunicationStyle from "./GlobalCommunicationStyle"
import { IoAddCircleOutline } from "react-icons/io5";
import SexualOrientationModal from "../../common/modals/sexualOrientationModal"
import CommunicationModal from "../../common/modals/communicationModal"
import DrinkPrefrenceModal from "../../common/modals/drinkPrefrenceModal"
import LookingPrefrenceModal from "../../common/modals/lookingPrefrenceModal"
import LovePrefrenceModal from "../../common/modals/lovePrefrenceModal"
import SmokePrefrenceModal from "../../common/modals/smokePrefrenceModal"
import WorkoutPrefrenceModal from "../../common/modals/workoutPrefrenceModal"


const GlobalSettings = () => {
    const [sexualModal,setSexualModal] = useState(false)
    const [commModal,setCommModal] = useState(false)
    const [drinkModal,setDrinkModal] = useState(false)
    const [lookingModal,setLookingModal] = useState(false)
    const [loveModal,setLoveModal] = useState(false)
    const [smokeModal,setSmokeModal] = useState(false)
    const [workoutModal,setWorkoutModal] = useState(false)
    return (
        <div className="p-8 bg-gray-100 min-h-screen mr-4">
            <h1 className="text-2xl font-semibold mb-8">App Settings</h1>
            <div className="flex space-x-6">
                <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Sexual Orientation <IoAddCircleOutline onClick={() => setSexualModal(true)} size={30} title="Add new sexual orientation" /></span>
                    </div>
                    <GlobalSexualOrientation />
                </div>
                <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Communication Style <IoAddCircleOutline onClick={() => setCommModal(true)} size={30} title="Add new Communication Style" /></span>
                    </div>
                    <GlobalCommunicationStyle />
                </div>
                <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Love Prefrence <IoAddCircleOutline onClick={() => setLoveModal(true)} size={30} title="Add new Love Prefrence" /></span>
                    </div>
                    <GlobalSexualOrientation />
                </div>
                <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Looking For Prefrence <IoAddCircleOutline onClick={() => setLookingModal(true)} size={30} title="Add new Looking Prefrence" /></span>
                    </div>
                    <GlobalSexualOrientation />
                </div>
            </div>
            <div className="flex space-x-6 mt-8">
                <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Drink Prefrence <IoAddCircleOutline onClick={() => setDrinkModal(true)} size={30} title="Add new Drink Prefrence" /></span>
                    </div>
                    <GlobalSexualOrientation />
                </div>
                <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Smoke Prefrence <IoAddCircleOutline onClick={() => setSmokeModal(true)} size={30} title="Add new Smoke Prefrence" /></span>
                    </div>
                    <GlobalCommunicationStyle />
                </div>
                <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <span className=" flex justify-between text-gray-500 text-xl font-bold">Workout Prefrence <IoAddCircleOutline onClick={() => setWorkoutModal(true)} size={30} title="Add new Workout Prefrence" /></span>
                    </div>
                    <GlobalCommunicationStyle />
                </div>
            </div>
            <SexualOrientationModal setShow={setSexualModal} show={sexualModal} text={"Add New Sexual Orientation"}/>
            <CommunicationModal setShow={setCommModal} show={commModal} text={"Add new Communication Style"}/>
            <DrinkPrefrenceModal setShow={setDrinkModal} show={drinkModal} text={"Add new Drink Prefrence"}/>
            <LookingPrefrenceModal setShow={setLookingModal} show={lookingModal} text={"Add new Looking Prefrence"}/>
            <LovePrefrenceModal setShow={setLoveModal} show={loveModal} text={"Add new Love Prefrence"}/>
            <SmokePrefrenceModal setShow={setSmokeModal} show={smokeModal} text={"Add new Smoke Prefrence"}/>
            <WorkoutPrefrenceModal setShow={setWorkoutModal} show={workoutModal} text={"Add new Workout Prefrence"}/>
        </div>
    )
}

export default GlobalSettings