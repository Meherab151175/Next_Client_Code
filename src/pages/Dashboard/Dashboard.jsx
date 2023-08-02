import React from 'react';
import { useUser } from '../../hooks/useUser';
import { GridLoader } from 'react-spinners';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const { currentUser, isLoading } = useUser();

    const role = currentUser?.role;
    
    if(isLoading){
        return <div className='flex items-center justify-center h-screen'>
            <GridLoader color="#1C75BC" />
        </div>
    }
    
    if(role === "admin") return <Navigate to="/dashboard/admin-home" replace/>;
    if(role === "instructor") return <Navigate to="/dashboard/instructor-home" replace />;
    if(role === "user") return <Navigate to="/dashboard/student-home" replace/>;
    
};

export default Dashboard;