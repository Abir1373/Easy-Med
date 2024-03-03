import { useQuery } from '@tanstack/react-query'


const getSingleDoctorEmail = ({ email }) => {
    const user = "abir"
    // const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('access-token');
    const { refetch, data: doctors = [] } = useQuery({
        queryKey: ['doctors', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors?email=${email}`)
            return res.json();
        },
    })
    if (doctors) return [doctors, refetch]
};

export default getSingleDoctorEmail;