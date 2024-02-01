import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
const getSingleDoctor = ({ id }) => {
    const user = "abir"
    const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('access-token');
    const { refetch, data: doctors = [] } = useQuery({
        queryKey: ['doctors', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors?_id=${id}`)
            return res.json();
        },
    })
    if (doctors) return [doctors, refetch]
};

export default getSingleDoctor;    