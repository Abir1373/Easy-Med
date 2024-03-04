import getAppointments from "../../../api/getAppointments";

const MyAppointments = () => {

    let [appointments, refetch] = getAppointments()

    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    console.log(appointments)

    return (
        <div className='flex-col space-y-5'>
            <div className='text-xl font-bold m-9 text-slate-400 font-bold'> Total Appointment : {appointments ? appointments.length : "not-found"} </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th className='text-xl font-bold text-center text-slate-500'>Patient Email</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Appointment Date</th>
                            <th className='text-xl font-bold text-center text-slate-500'>Serial No</th>
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

export default MyAppointments;