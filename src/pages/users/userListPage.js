import React, { useState } from "react";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { TbEyeEdit } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigation } from "react-router-dom";
import ViewImage from "../../common/ImageViewer/viewer"
import Pagination from "../../common/pagination/Paginaion"



const UserListPage = () => {
    const navigate = useNavigation()
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [page, setPage] = useState(1)
    const imageViewer = () => {
        setIsPopupVisible(!isPopupVisible)
    }

    const handleClose = () => {
        setIsPopupVisible(!isPopupVisible)
    }
    return (
        <>
            <ViewImage
                images={["/phloii.jpg"]}
                visible={isPopupVisible}
                onClose={handleClose}
            />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-1 gap-4 ml-4">
                        <div>
                            <label for="name1" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Name</label>
                            <input
                                type="text"
                                id="name1"
                                className="bg-gray-50 border border-gray-300 text-gray-700 placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label for="name2" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Age</label>
                            <input
                                type="text"
                                id="name2"
                                className="bg-gray-50 border border-gray-300 text-gray-700 placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                                placeholder="Enter your Age"
                            />
                        </div>
                        <div>
                            <label for="name3" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Location</label>
                            <input
                                type="text"
                                id="name3"
                                className="bg-gray-50 border border-gray-300 text-gray-700 placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                                placeholder="Enter your Location"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-auto px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-8 flex items-center"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        Search
                    </button>

                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Profile Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Joined on
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th onClick={() => imageViewer()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                <img className="rounded-3xl" width={40} src="/phloii.jpg" alt="profile user" />
                            </th>
                            <td className="px-6 py-4">
                                Hankish
                            </td>
                            <td className="px-6 py-4">
                                20
                            </td>
                            <td className="px-6 py-4">
                                22-07-1999
                            </td>
                            <td className="px-6 py-4">
                                Mohali
                            </td>
                            <td className="px-6 py-4">
                                8168513680
                            </td>
                            <td className="px-6 py-4">
                                Online
                            </td>
                            <td className="px-6 py-4">
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                    <div className="mr-2" title="Delete">
                                        <AiTwotoneDelete size={20} />
                                    </div>
                                    <div title="Deactivate">
                                        <MdOutlineAirplanemodeActive fill="red" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th onClick={() => imageViewer()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                <img className="rounded-3xl" width={40} src="/phloii.jpg" alt="profile user" />
                            </th>
                            <td className="px-6 py-4">
                                Hankish
                            </td>
                            <td className="px-6 py-4">
                                20
                            </td>
                            <td className="px-6 py-4">
                                22-07-1999
                            </td>
                            <td className="px-6 py-4">
                                Mohali
                            </td>
                            <td className="px-6 py-4">
                                8168513680
                            </td>
                            <td className="px-6 py-4">
                                Online
                            </td>
                            <td className="px-6 py-4">
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                    <div className="mr-2" title="Delete">
                                        <AiTwotoneDelete size={20} />
                                    </div>
                                    <div title="Deactivate">
                                        <MdOutlineAirplanemodeActive fill="red" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th onClick={() => imageViewer()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                <img className="rounded-3xl" width={40} src="/phloii.jpg" alt="profile user" />
                            </th>
                            <td className="px-6 py-4">
                                Hankish
                            </td>
                            <td className="px-6 py-4">
                                20
                            </td>
                            <td className="px-6 py-4">
                                22-07-1999
                            </td>
                            <td className="px-6 py-4">
                                Mohali
                            </td>
                            <td className="px-6 py-4">
                                8168513680
                            </td>
                            <td className="px-6 py-4">
                                Online
                            </td>
                            <td className="px-6 py-4">
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                    <div className="mr-2" title="Delete">
                                        <AiTwotoneDelete size={20} />
                                    </div>
                                    <div title="Deactivate">
                                        <MdOutlineAirplanemodeActive fill="red" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center items-center mt-4 mb-4">
                    <Pagination currentPage={page} totalPages={100} setPage={setPage} />
                </div>
            </div>

        </>
    )
}

export default UserListPage