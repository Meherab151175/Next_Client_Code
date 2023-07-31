import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' replace  state={{from : location}}/>;
    }


    return children;
};

export default PrivetRoute;