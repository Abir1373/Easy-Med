import React from 'react';
import useAuth from '../../Hooks/useAuth';

const MyReviews = () => {
    const { user } = useAuth()
    return (
        <div>
            <p className='text-center text-2xl font-bold text-green-600 my-6'>Welcome back,{user.displayName ? user.displayName : user.email}</p>
        </div>
    );
};

export default MyReviews;