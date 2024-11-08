import React, { useState } from 'react';
import GlobalSettings from "../../pages/settings/GlobalSettings"

const SettingsTab = () => {
    const [activeTab, setActiveTab] = useState('Global Settings');

    return (
        <div className=" border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                {['Global Settings', 'Secret Dating Settings'].map((tab) => (
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
                {activeTab === 'Global Settings' && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel">
                        <GlobalSettings />
                    </div>
                )}
                {activeTab === 'Secret Dating Settings' && (
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel">
                        <GlobalSettings />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsTab;
