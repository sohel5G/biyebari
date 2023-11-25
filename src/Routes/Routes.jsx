import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import DashboardLayout from "../pages/Layouts/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ClientsDashboard from "../pages/Dashboard/Clients/ClientsDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [

            // Admin routes 
            {
                path: 'admin',
                element: <AdminDashboard />
            },










            // Clients Routes
            {
                path: 'client',
                element: <ClientsDashboard />
            },


        ]
    }
])

export default router;