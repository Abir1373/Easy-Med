import React from 'react';
import getUsers from '../../../api/getUsers';
import PIECHART from '../../../others/PIECHART';

const DbMain = () => {
    let [users, refetch] = getUsers()
    if (!users) {
        <span className="loading loading-spinner text-secondary items-center justify-center"></span>
    }
    let Doctors = users.filter(item=>item.user_role==='doctor')
    let Users = users.filter(item=>item.user_role==='user')
    let Admins = users.filter(item=>item.user_role==='admin')
    
    return (
        <div className='flex text-xl font-bold'>
            <PIECHART Doctors={Doctors.length} Users={Users.length} Admins={Admins.length}></PIECHART>
            <div className='text-center m-9'>Currently we have total <span className='text-orange-700 text-2xl'>{Doctors.length}</span> Doctors, <span className='text-orange-700 text-2xl'>{Users.length}</span> Users, <span className='text-orange-700 text-2xl'>{Admins.length}</span> admins  </div>
        </div>
    );
};

export default DbMain;