import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../providers/AuthProvider';


const getSingleUser = () => {
    const { user } = useContext(AuthContext)
    if (!user) {
        <span className="loading loading-spinner text-error"></span>
    }
    const { refetch, data: singleUser = [] } = useQuery({
        queryKey: ['singleUser', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user.email}`)
            return res.json()
        },
    })
    if (singleUser) return [singleUser, refetch]

};

export default getSingleUser;