import React, { useState } from "react";
import ViewImage from "../../common/ImageViewer/viewer"
import Pagination from "../../common/pagination/Paginaion"

const DeleteUserList = () => {
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
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Profile Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Deleted At
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Deleted By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Mobile
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <th onClick={() => imageViewer()} scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                                    <img className="rounded-3xl" width={30} src="/phloii.jpg" alt="profile user" />
                                </th>
                            </th>
                            <td class="px-4 py-2">
                                Hankish
                            </td>
                            <td class="px-4 py-2">
                                22-07-2024
                            </td>
                            <td class="px-4 py-2">
                                Admin
                            </td>
                            <td class="px-4 py-2">
                                8168513680
                            </td>
                            <td class="px-4 py-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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

export default DeleteUserList