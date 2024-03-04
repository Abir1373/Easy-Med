import React from 'react'
import useAuth from '../../Hooks/useAuth'
import getHistory from '../../../api/getHistory'

<<<<<<< HEAD
const MyHistory =  () => {
=======
export default function MyHistory() {
    const { user } = useAuth()
    let [appointments, refetch] = getHistory()
    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }
>>>>>>> 302b90d6dcf3d78264a345068fa059f8a88b114d

    return (
        <div>
            <div className="overflow-x-auto">
                {appointments.length === 0 ? <p className='text-center text-2xl font-bold text-green-600 my-6'>Empty history</p>
                    :
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
                }

            </div>
        </div>
    );
}
