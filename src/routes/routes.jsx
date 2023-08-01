import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login/Login";
import Instructor from "../pages/Instructor/Instructor";
import PrivetRoute from "./PrivateRoute";
import InstructorDH from "../pages/Dashboard/InstructorDashboard/InstructorDH";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import StudentDH from "../pages/Dashboard/Student/StudentDH";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import MyEnrollClasses from "../pages/Dashboard/Student/MyEnrollClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import UpdateUsers from "../pages/Dashboard/Admin/UpdateUsers";
import AdminDH from "../pages/Dashboard/Admin/AdminDH";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import AddClasses from "../pages/Dashboard/InstructorDashboard/AddClasses";
import ApplyInstructor from "../pages/Dashboard/Student/ApplyInstructor";
import Dashboard from "../pages/Dashboard/Dashboard";
import UpdateClasses from "../pages/Dashboard/InstructorDashboard/UpdateClasses";
import Payment from "../pages/Dashboard/Student/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import Classes from "../pages/Classes";
import Error from "../pages/Error";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/instructors',
                element:<Instructor />
            },
            {
                path:'/classes',
                element:<Classes />
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout />,
        errorElement:<Error />,
        children: [
            {
                index: true,
                element: <PrivetRoute><Dashboard /></PrivetRoute>
            },
            // admin routes
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            {
                path: 'update-user/:id',
                element: <UpdateUsers />,
                loader: ({ params }) => fetch(`https://server-meherab151175.vercel.app/users/${params.id}`),
            },
            {
                path: 'admin-home',
                element: <AdminDH />
            },
            {
                path: 'manage-class',
                element: <ManageClasses />
            },
            // instructor routes
            {
                path: 'instructor-home',
                element: <InstructorDH />
            },
            {
                path: 'add-class',
                element: <AddClasses />
            },
            {
                path: 'my-classes',
                element: <MyClasses />
            },
            {
                path: 'update/:id',
                element: <UpdateClasses />,
                loader: ({ params }) => fetch(`https://server-meherab151175.vercel.app/class/${params.id}`),
            },
            // student routes
            {
                path: 'student-home',
                element: <StudentDH />
            },
            {
                path: 'selected-classes',
                element: <SelectedClass />
            },
            {
                path: 'user/payment',
                element: <Payment />
            },
            {
                path: 'my-payments',
                element: <PaymentHistory />
            },
            {
                path: 'apply-instructor',
                element: <ApplyInstructor />
            },
            {
                path: 'enrolled-class',
                element: <MyEnrollClasses />
            }
        ]
    }
])