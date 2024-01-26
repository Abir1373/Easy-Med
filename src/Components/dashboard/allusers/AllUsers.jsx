import React from 'react';
import getUsers from '../../../api/getUsers';

const AllUsers = () => {
    let [users, refetch] = getUsers()
    if (!users) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }

    const handleAdmin = () => {
        console.log('handleAdmin')
    }

    const handleRemoveUser = () => {
        console.log('remove user')
    }
    
    return (
        <div className='flex flex-col space-y-5 m-9'>
            <h3 className='text-4xl font-bold pl-5'>All Users : {users.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> <span className='text-3xl font-bold'> Name </span>   </th>
                            <th> <span className='text-3xl font-bold'> Email </span>   </th>
                            <th> <span className='text-3xl font-bold'> Action </span>   </th>
                            <th> <span className='text-3xl font-bold'> Action </span>   </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>

                                    <td className='uppercase text-slate-400 text-2xl font-bold'> {user.name} </td>
                                    <td className='text-slate-400 text-2xl font-bold'>{user.email}</td>
                                    <td className='uppercase text-slate-400 text-2xl font-bold'> {user.user_role === 'admin' ? '' : <button onClick={handleAdmin} className="btn btn-success text-xl text-white h-16">Make Admin</button>} </td>
                                    <td className='uppercase text-slate-400 text-2xl font-bold'><button className="btn btn-success text-xl text-white h-16">Remove User</button></td>
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