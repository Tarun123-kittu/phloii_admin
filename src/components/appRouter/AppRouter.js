import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../appLayout/AppLayout";
import Dashboard from "../dashboard/Dashboard";
import Login from "../Auth/Login";
import Users from "../users/Users";
import VerificationRequests from "../verificationRequests/VerificationRequests"
import Settings from "../settings/Settings"

const AppRouter = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Login />, 
        },
        {
            path: "/",
            element: <AppLayout />, 
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "/users",
                    element: <Users />,
                },
                {
                    path: "/verification-requests",
                    element: <VerificationRequests />,
                },
                {
                    path: "/settings",
                    element: <Settings />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
};

export default AppRouter;
