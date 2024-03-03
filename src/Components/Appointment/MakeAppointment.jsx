import { useLoaderData } from "react-router-dom"
import PagaTitle from "../Shared/PagaTitle"
import useAuth from "../Hooks/useAuth"

import axios from "axios"

export default function MakeAppointment() {
    const doctorinfo = useLoaderData()

    const { user } = useAuth()

    if (!user) {
        return <span className="loading loading-spinner text-primary"></span>
    }

    console.log(doctorinfo)

    const handleConfirmPayment = async () => {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        var currentDay = currentDate.getDate()

        var todayDate = `${currentYear}_${currentDay}_${currentMonth}`

        // console.log(todayDate)

        const appointmentObject = {
            'doctor_name': doctorinfo[0].doctor_name,
            'doctor_email': doctorinfo[0].email,
            'doctor_fee': doctorinfo[0].fee,
            'doctor_speciality': doctorinfo[0].speciality,
            'total_slots': doctorinfo[0].slots,
            'appointment_status': doctorinfo[0].appointment_status,
            'serial_number': doctorinfo[0].serial_no + 1,
            'user_email': user.email,
            'appointment_date': todayDate,
        }

        // console.log(appointmentObject)

        const response = await axios.post('http://localhost:5000/patient_appointment', appointmentObject)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))

        let updatedData = { 'serial_no': doctorinfo[0].serial_no + 1 }
        let url = `http://localhost:5000/doctors?email=${doctorinfo[0].email}`
        const response2 = await axios.patch(url, updatedData)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="flex-col">
            <PagaTitle MainTitle={"Make your appointment"} />
            {/* form */}
            <h2 className="text-center font-bold text-5xl capitalize my-12">Confirm Your Appointment</h2>

            <div className='mx-auto container max-w-screen-xl items-center justify-center flex '>
                {
                    doctorinfo.map((item, index) =>
                        <div className="flex-col m-9" key={index}>

                            <div className="grid grid-cols-2 gap-5 m-5">


                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic">Doctor Name: </span> {item.doctor_name} </h2>
                                    </div>
                                </div>


                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic">Doctor Email: </span> {item.email} </h2>
                                    </div>
                                </div>



                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic">Doctor Fee: </span> {item.fee} <span className="text-rose-800">TK</span> </h2>
                                    </div>
                                </div>

                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic">Dept: </span> {item.speciality} </h2>
                                    </div>
                                </div>

                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic"> Total Slot/s: </span> {item.slots} </h2>
                                    </div>
                                </div>

                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic"> Appointment Status: </span> {item.appointment_status === "open" ? <span className="text-success uppercase"> {item.appointment_status} </span> : <span className="text-danger uppercase"> {item.appointment_status} </span>} </h2>
                                    </div>
                                </div>

                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic"> Serial Number : </span> {item.serial_no + 1} </h2>
                                    </div>
                                </div>

                                <div className="card w-98 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title"> <span className="text-orange-700 italic">User Email: </span> {user.email} </h2>
                                    </div>
                                </div>


                            </div>


                            {

                                (doctorinfo[0].appointment_status === "open" && (doctorinfo[0].serial_no + 1) <= doctorinfo[0].slots) ?

                                    <div className="flex items-center justify-center">
                                        <button className="btn btn-success text-white text-xl" onClick={handleConfirmPayment}>Confirm Payment</button>
                                    </div>

                                    :

                                    <div className="flex items-center justify-center text-xl font-bold text-warning">Sorry ! We are totally booked</div>
                            }

                        </div>


                    )
                }
            </div>
        </div>
        
    )
}
