import React, { useContext } from 'react';
import axios from 'axios';
import getDoctorRequests from '../../../api/getDoctorRequests';
import { AuthContext } from '../../../providers/AuthProvider';



const AddADoctor = () => {
    const {createUser} = useContext(AuthContext)

    let [doctorRequests, refetch] = getDoctorRequests()
    if (!doctorRequests) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }

    // console.log(doctorRequests)

    const showDetails = (doctor) => {
        console.log(doctor.email)
    }
    const removeUser = async (doctor) => {
        console.log(doctor.email)
        try {
            const response = await axios.delete(`http://localhost:5000/doctor_request?_id=${doctor._id}`);
            console.log(`Deleted User: ${doctor.name}`, response.data);
            refetch()
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
    const acceptUser = (doctor) => {
        let addedDoctor = {
            'name' : doctor.doctor_name ,
            'user_name' : doctor.doctor_name ,
            'email' : doctor.email ,
            'password': doctor.password , 
            'user_role' : "doctor"
        }
        createUser(doctor.email, doctor.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                axios.post(`http://localhost:5000/users`, addedDoctor)
                    .then((res) => {
                        console.log(res)
                        removeUser(doctor)
                    })
                
            })
            .catch(err => {
                console.log(err);
            })           
        
    }

    return (
        <div className='flex flex-col space-y-5 m-9'>
            <h3 className='text-2xl font-bold pl-5'> Doctor Requests : {doctorRequests.length}  </h3>
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
                                    <td className='text-slate-400 text-2xl font-bold'> {doctor.doctor_name} </td>
                                    <td className='text-slate-400 text-2xl font-bold'> {doctor.email} </td>
                                    <td> <button className="btn btn-outline btn-info text-xl" onClick={() => showDetails(doctor)}>Show Details</button> </td>
                                    <td> <button className="btn btn-outline btn-info text-xl" onClick={() => removeUser(doctor)}>Remove User</button> </td>
                                    <td> <button className="btn btn-outline btn-info text-xl" onClick={() => acceptUser(doctor)}>Accept User</button> </td>
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