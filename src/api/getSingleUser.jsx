import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const getSingleUser = async () => {
    const {user} = useContext(AuthContext)
    if(user){
        const res = await axios.get(`http://localhost:5000/users?email=${user.email}`)
        console.log(res.data)
        return [res.data] ; 
    }
};

export default getSingleUser;