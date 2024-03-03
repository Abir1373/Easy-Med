import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const getSingleUser = () => {

    const { user } = useContext(AuthContext)

    const { refetch, data: singleUser = [] } = useQuery({
        queryKey: ['singleUser', user?.email],
        queryFn: async () => {
            // const token = localStorage.getItem('access-token')
            const res = await fetch(`http://localhost:5000/users?email=${user.email}`)
            return res.json()
        },
    })
    if (singleUser){
        console.log(singleUser)
        return [singleUser, refetch]
        
    }
};

export default getSingleUser;