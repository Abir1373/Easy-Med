import React from 'react';
import data from '../../../../public/appointment.json'
const MyAppointments = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Doctor's name</th>
                            <th>fees</th>
                            <th>Approximate time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data.map((item, index) =>
                            <tr>
                                <td>{item.doctors_name}</td>
                                <td>{item.fees}</td>
                                <td>{item.time}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;