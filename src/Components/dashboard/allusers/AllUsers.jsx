import React from 'react';
import getUsers from '../../../api/getUsers';
import axios from 'axios';

const AllUsers = () => {
    let [users, refetch] = getUsers()
    if (!users) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }
<<<<<<< HEAD

    const handleAdmin = async (user) => {
        console.log(user.name)
        let url = `http://localhost:5000/users?email=${user.email}`
        let updatedData = { user_role: 'admin' }
        try {
            const response = await axios.patch(url, updatedData);
            console.log('User role updated successfully:', response.data);
            refetch()
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    }

    const handleRemoveUser = async (user) => {
        console.log(user.name);
        try {
            const response = await axios.delete(`http://localhost:5000/users?email=${user.email}`);
            console.log(`Deleted User: ${user.name}`, response.data);
            refetch()
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    
=======
    const handleAdmin = () => {
        console.log('handleAdmin')
    }

    const handleRemoveUser = () => {
        console.log('remove user')
    }
>>>>>>> 9c1d6708331258a7921c62d30d89e45807e904ca

    return (
        <div className='flex flex-col space-y-5 m-9'>
            <h3 className='text-2xl font-bold pl-5'>All Users : {users.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> <span className='text-xl font-bold'> Name </span>   </th>
                            <th> <span className='text-xl font-bold'> Email </span>   </th>
                            <th> <span className='text-xl font-bold'> Action </span>   </th>
                            <th> <span className='text-xl font-bold'> Action </span>   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>

                                    <td className='uppercase text-slate-400 text-xl font-bold'> {user.name} </td>
                                    <td className='text-slate-400 text-2xl font-bold'>{user.email}</td>
<<<<<<< HEAD
                                    <td className='uppercase text-slate-400 text-2xl font-bold'> {user.user_role === 'admin' ? '' :
                                        <button onClick={() => handleAdmin(user)} className="btn btn-success text-xl text-white h-16">Make Admin</button>}
                                    </td>
                                    <td className='uppercase text-slate-400 text-2xl font-bold'>
                                        <button onClick={()=>handleRemoveUser(user)} className="btn btn-success text-xl text-white h-16">Remove User</button>
                                    </td>
=======
                     <td className='uppercase text-slate-400 text-2xl font-bold'> {user.user_role === 'admin' ? '' : <button onClick={handleAdmin} className="btn btn-success text-xl text-white h-16">Make Admin</button>} </td>
                                    <td className='uppercase text-slate-400 text-2xl font-bold'><button className="btn btn-success text-xl text-white h-16">Remove User</button></td>

                                    <td className='uppercase text-slate-400 text-xl font-bold'> {user.user_role === 'admin' ? '' : <button className="btn btn-success text-xl text-white h-16">Make Admin</button>} </td>
                                    <td className='uppercase text-slate-400 text-xl font-bold'><button className="btn btn-success text-xl text-white h-16">Remove User</button></td>
>>>>>>> 9c1d6708331258a7921c62d30d89e45807e904ca
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;