import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';
import { useContext, useRef } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const getHistory = () => {
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
            // console.log(user)
            const res = await fetch(`http://localhost:5000/patient_history?email=${user.email}&appointment_date=${todayDate}`)
            let data = await res.json();
            let filteredAppointments = data.filter(appointment => appointment.appointment_date !== todayDate);
            console.log(filteredAppointments)
            return filteredAppointments;
        },
    })
    if (appointments) return [appointments, refetch]
};

export default getHistory; 
