import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
import { useContext, useRef } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const getAppointmentHistory = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate()
    let todayDate = `${currentYear}_${currentDay}_${currentMonth}`
    // const token = localStorage.getItem('access-token');
    const { refetch, data: appointments = [] } = useQuery({
        queryKey: ['appointments', user?.email],
        queryFn: async () => {
            console.log(user)
            const res = await fetch(`http://localhost:5000/appointment_history?email=${user.email}`)
            let data = await res.json()
            console.log(data)
            let filteredAppointments = data.filter(appointment => appointment.appointment_date !== todayDate);
            // console.log(res.data)
            return filteredAppointments;
        },
    })
    if (appointments) return [appointments,refetch]
};

export default getAppointmentHistory; 
