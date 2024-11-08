import React from "react"
import { TbEyeEdit } from "react-icons/tb";

const GlobalCommunicationStyle = () => {
    return (
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th  class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-4 py-2 h-20">
                    Hankish
                </td>
                <td class="px-4 py-2">
                    <TbEyeEdit fill="grey" size={20} />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-4 py-2 h-20">
                    Hankish
                </td>
                <td class="px-4 py-2">
                    <TbEyeEdit fill="grey" size={20} />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-4 py-2 h-20">
                    Hankish
                </td>
                <td class="px-4 py-2">
                    <TbEyeEdit fill="grey" size={20} />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-4 py-2 h-20">
                    Hankish
                </td>
                <td class="px-4 py-2">
                    <TbEyeEdit fill="grey" size={20} />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-4 py-2 h-20">
                    Hankish
                </td>
                <td class="px-4 py-2">
                    <TbEyeEdit fill="grey" size={20} />
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default GlobalCommunicationStyle