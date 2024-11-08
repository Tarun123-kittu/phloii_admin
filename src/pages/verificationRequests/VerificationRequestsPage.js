import React, { useState } from "react"
import { TbEyeEdit } from "react-icons/tb";
import { useNavigation } from "react-router-dom";
import ViewImage from "../../common/ImageViewer/viewer"
import Pagination from "../../common/pagination/Paginaion"

const VerificationRequestsPage = ({hide}) => {
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
            {!hide && <ViewImage
                images={["/phloii.jpg"]}
                visible={isPopupVisible}
                onClose={handleClose}
            />}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
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
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th onClick={() => imageViewer()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th onClick={() => imageViewer()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th onClick={() => imageViewer()} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                <div className="inline-flex items-center">
                                    <div className="mr-2" title="Edit/view">
                                        <TbEyeEdit fill="grey" size={20} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {!hide && <div className="flex justify-center items-center mt-4 mb-4">
                    <Pagination currentPage={page} totalPages={100} setPage={setPage} />
                </div>}
            </div>

        </>
    )
}

export default VerificationRequestsPage