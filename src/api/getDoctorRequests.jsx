import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
const getDoctorRequests = () => {
    const user = "abir"
    // const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token');
    const { refetch, data: doctorRequests = [] } = useQuery({
        queryKey: ['doctorRequests', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctor_request`)
            return res.json();
        },
    })
    if (doctorRequests) return [doctorRequests, refetch]
};

export default getDoctorRequests;    