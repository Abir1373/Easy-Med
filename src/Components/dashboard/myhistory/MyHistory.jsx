import React from 'react'

import getHistory from '../../../api/getHistory'

const MyHistory =  () => {
    let [appointments, refetch] = getHistory()
    console.log(appointments)
    if (!appointments) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    return (
        <div className='flex-col'>

            <div className='text-center m-9 text-xl text-slate-600 font-bold'>Previous Appointments : {appointments.length} </div>

            <div className="overflow-x-auto">
                {appointments.length === 0 ? <p className='text-center text-2xl font-bold text-green-600 my-6'>Empty history</p>
                    :
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-xl uppercase'>Email</th>
                                <th className='text-xl uppercase'>date</th>
                                <th className='text-xl uppercase'>Serial</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {appointments.map((item, index) =>
                                <tr key={index}>
                                    <td className='text-xl font-bold text-slate-600'>{item.user_email}</td>
                                    <td className='text-xl font-bold text-slate-600'>{item.appointment_date}</td>
                                    <td className='text-xl font-bold text-slate-600'>{item.serial_number}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                }

            </div>
        </div>
    );
}

export default MyHistory ;
