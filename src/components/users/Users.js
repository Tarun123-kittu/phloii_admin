import React, { useEffect } from "react";
import UsersTab from "../../Tabs/usersTab/UsersTab";

const Users = () => {
    useEffect(() => {
        document.title = "All Users";
    }, []);
    return (
        <UsersTab />
    )
}

export default Users