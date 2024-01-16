import { useQuery } from '@tanstack/react-query'
const getDoctors = () => {
    const user = "abir"
    const { refetch, data: doctors = [] } = useQuery({
        queryKey: ['doctors', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`)
            return res.json()
        },
    })
    if (doctors) return [doctors, refetch]
};

export default getDoctors;