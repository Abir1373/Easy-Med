import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
const getDoctors = () => {
    const user = "abir"
    const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('access-token');
    const { refetch, data: doctors = [], isLoading: loading } = useQuery({
        queryKey: ['doctors', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`)
            return res.json();
        },
    })
    if (doctors) return [doctors, , loading, refetch]
};

export default getDoctors; 