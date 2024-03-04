<<<<<<< HEAD
import getAppointments from "../../../api/getAppointments";

const MyAppointments = () => {

    let [appointments, refetch] = getAppointments()

    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    console.log(appointments)

=======
import React from 'react';
import getAppointmentUser from '../../../api/getAppointmentUser';

const MyAppointments = () => {
    let [appointments, refetch] = getAppointmentUser()
    console.log(appointments)
    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }
>>>>>>> 302b90d6dcf3d78264a345068fa059f8a88b114d
    return (
        <div className='flex-col space-y-5'>
            <div className='text-xl font-bold m-9 text-slate-400 font-bold'> Total Appointment : {appointments ? appointments.length : "not-found"} </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
<<<<<<< HEAD
                            
                            <th className='text-xl font-bold text-center text-slate-500'>Patient Email</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Appointment Date</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Serial No</th>
=======
                            <th>Email</th>
                            <th>date</th>
                            <th>Serial</th>
>>>>>>> 302b90d6dcf3d78264a345068fa059f8a88b114d
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
<<<<<<< HEAD
                        {appointments ?
                            appointments.map((appointment, index) => (
                                <tr key={index}>
                                    
                                    <td className='text-xl font-bold text-center text-slate-400'>{appointment.user_email}</td>
                                    <td className='uppercase text-xl font-bold text-center text-slate-400'>{appointment.appointment_date}</td>
                                    <td className='uppercase text-xl font-bold text-center text-slate-400'>{appointment.serial_number}</td>
                                    
                                </tr>
                            ))
                            :
                            "not found"
=======
                        {appointments.map((item, index) =>
                            <tr key={index}>
                                <td>{item.user_email}</td>
                                <td>{item.appointment_date}</td>
                                <td>{item.serial_number}</td>
                            </tr>)
>>>>>>> 302b90d6dcf3d78264a345068fa059f8a88b114d
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAppointments;