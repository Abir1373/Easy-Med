import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
const getDoctorRequests = () => {
    const user = "abir"
    const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token');
    const { refetch, data: doctorRequest = [] } = useQuery({
        queryKey: ['doctorRequest', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctor_request`)
            return res.json();
        },
    })
    if (doctorRequest) return [doctorRequest, refetch]
};

export default getDoctorRequests; 
