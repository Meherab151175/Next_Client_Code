import React from 'react';
import error from '../assets/er.webp'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full h-screen relative'>
            <img src={error} className='w-full h-screen' alt="" />
            <Link to='/' className='btn absolute bottom-16 left-1/2 btn-outline'>Go Home</Link>
        </div>
    );
};

export default Error;