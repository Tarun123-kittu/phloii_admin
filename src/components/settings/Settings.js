import React, { useEffect } from "react"
import SettingsTab from "../../Tabs/settingsTab/SettingsTab"

const Settings = () => {
    useEffect(() => {
        document.title = "Settings";
    }, []);
    return (
        <SettingsTab />
    )
}

export default Settings