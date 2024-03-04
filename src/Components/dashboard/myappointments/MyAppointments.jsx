import React from 'react';
import getAppointmentUser from '../../../api/getAppointmentUser';

const MyAppointments = () => {
    let [appointments, refetch] = getAppointmentUser()
    console.log(appointments)
    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>date</th>
                            <th>Serial</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {appointments.map((item, index) =>
                            <tr key={index}>
                                <td>{item.user_email}</td>
                                <td>{item.appointment_date}</td>
                                <td>{item.serial_number}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;