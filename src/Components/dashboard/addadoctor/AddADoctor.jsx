import React from 'react';
import axios from 'axios';
import getDoctorRequests from '../../../api/getDoctorRequests';

const AddADoctor = () => {
    let [doctorRequests, refetch] = getDoctorRequests()
    if (!doctorRequests) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }

    const handleDetails = (doctor) => {
        console.log('up', doctor._id)
    }

    const handleRemoveDoctor = async (doctor) => {
        console.log('down', doctor._id)
        const res = await axios.delete(`http://localhost:5000/doctor_request?_id=${doctor._id}`)
        console.log(res)
        refetch()
    }

    const handleAddADoctor = async (doctor) => {
        console.log('right', doctor)
        const doctorUserInfo = {
            'name':doctor.name , 
            'user_name':doctor.name , 
            'email':doctor.email,
            'password':doctor.password,
            'user_role':'doctor'
        }
        const doctorInfo = {
            'doctor_name':doctor.name , 
            'speciality':doctor.speciality , 
            'email':doctor.email ,
            'image_link':doctor.image_link , 
            'designation':doctor.designation , 
            'ratings': 0.0 , 
            'fee': doctor.fee , 
            'degree': doctor.degree 
        }

        console.log(doctorUserInfo,doctorInfo)

        const responseOne = await axios.post(`http://localhost:5000/doctors`,doctorInfo).then(res => console.log(res))
        const responseTwo = await axios.post(`http://localhost:5000/users`,doctorUserInfo).then(res => console.log(res))
        handleRemoveDoctor(doctor)
    }

    return (
        <div className='flex flex-col space-y-5 m-9'>
            <h3 className='text-2xl font-bold pl-5'>All Users : {doctorRequests.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> <span className='text-xl font-bold'> Name </span>   </th>
                            <th> <span className='text-xl font-bold'> Email </span>   </th>
                            <th> <span className='text-xl font-bold'> Action </span>   </th>
                            <th> <span className='text-xl font-bold'> Action </span>   </th>
                            <th> <span className='text-xl font-bold'> Action </span>   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctorRequests.map((doctor, index) => (
                                <tr key={index}>

                                    <td className='uppercase text-slate-400 text-xl font-bold'> {doctor.name} </td>
                                    <td className='text-slate-400 text-2xl font-bold'>{doctor.email}</td>
                                    <td className='uppercase text-slate-400 text-2xl font-bold'>
                                        <button onClick={() => handleDetails(doctor)} className="btn btn-success text-xl text-white h-16">Show Details</button>
                                    </td>
                                    <td className='uppercase text-slate-400 text-2xl font-bold'>
                                        <button onClick={() => handleRemoveDoctor(doctor)} className="btn btn-success text-xl text-white h-16">Remove Doctor</button>
                                    </td>

                                    <td className='uppercase text-slate-400 text-2xl font-bold'>
                                        <button onClick={() => handleAddADoctor(doctor)} className="btn btn-success text-xl text-white h-16">Add Doctor</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddADoctor;