import React, { useState } from 'react';
import UserListPage from "../../pages/users/userListPage"
import DeleteUserList from '../../pages/users/deleteUserList';
import BlockedUserList from '../../pages/users/blockedUserList';

const UsersTab = () => {
    const [activeTab, setActiveTab] = useState('Users');

    return (
        <div className=" border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                {['Users', 'Deleted Users', 'Blocked Users'].map((tab) => (
                    <li key={tab} className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${
                                activeTab === tab
                                    ? 'border-blue-500 text-blue-600'
                                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                            }`}
                            onClick={() => setActiveTab(tab)}
                            type="button"
                            role="tab"
                            aria-controls={tab}
                            aria-selected={activeTab === tab}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {activeTab === 'Users' && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel">
                        <UserListPage />
                    </div>
                )}
                {activeTab === 'Deleted Users' && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel">
                        <DeleteUserList />
                    </div>
                )}
                {activeTab === 'Blocked Users' && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel">
                       <BlockedUserList />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UsersTab;
