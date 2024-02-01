import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const getUsers = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const token = localStorage.getItem('access-token')
            const res = await fetch(`http://localhost:5000/users`,)
            return res.json()
        },
    })
    if (users) return [users, refetch]
};
export default getUsers;