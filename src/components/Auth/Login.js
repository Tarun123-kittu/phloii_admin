import React, { useEffect } from "react";
import LoginPage from "../../pages/Auth/LoginPage";

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, []);
    return (
        <LoginPage />
    )
}

export default Login