import { Link, useNavigate } from "react-router-dom";
import getAppointmentHistory from "../../../api/getAppointmentHistory";


const DoctorHistory = () => {

    let [appointments, refetch] = getAppointmentHistory()

    console.log(appointments)

    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    return (
        <div className='flex-col space-y-5'>
            <div className='text-xl font-bold m-9 text-slate-400 '> Total Appointment : {appointments ? appointments.length : "not-found"} </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='text-xl font-bold text-center text-slate-500'>Patient Email</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Appointment Date</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Serial No</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Prescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {appointments ?
                            appointments.map((appointment, index) => (
                                <tr key={index}>

                                    <td className='text-xl font-bold text-center text-slate-400'>{appointment.user_email}</td>
                                    <td className='uppercase text-xl font-bold text-center text-slate-400'>{appointment.appointment_date}</td>
                                    <td className='uppercase text-xl font-bold text-center text-slate-400'>{appointment.serial_number}</td>
                                    <td className='uppercase text-xl font-bold text-center text-slate-400'>
                                        <Link to={`/prescription/${appointment.user_email}`} className="btn btn-success text-xl text-white h-16">Make Prescription</Link>
                                    </td>

                                </tr>
                            ))
                            :
                            "not found"
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default DoctorHistory;