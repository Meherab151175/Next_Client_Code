import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    return (
        <div className='flex justify-center w-full items-center py-6 hover:ring '>
            <FaGoogle className='my-2' />
        </div>
    );
};

export default GoogleLogin;