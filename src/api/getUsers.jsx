import { useQuery } from '@tanstack/react-query'

const getUsers = () => {
    const user = "abir"
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json()
        },
    })
    if (users) return [users, refetch]
};
export default getUsers;