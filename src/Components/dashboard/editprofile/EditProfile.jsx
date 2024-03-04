import React, { useContext, useEffect, useState } from 'react';
import { TbEdit } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import getSingleUser from '../../../api/getSingleUser';
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {

    const { user, changePassword, changeEmail , logOut , changeProfilePic } = useContext(AuthContext)

    const [userImage, setUserImage] = useState(0);
    const [userName, setUserName] = useState(0);
    const [userEmail, setUserEmail] = useState(0);
    const [userPassword, setUserPassword] = useState(0);

    let [singleUser, refetch] = getSingleUser()

    const getImageStyle = () => ({
        width: '250px',
        height: '300px',
        borderRadius: '50%',
        backgroundSize: 'contain',
    });

    const handleImageLink = async () => {
        let userImageLink = document.getElementById('userImageLink').value;
        console.log(userImageLink);
        // let url = `http://localhost:5000/users?email=${singleUser[0].email}`
        // let updatedData = { '': userNameValue }
        // const res = await axios.patch(url, updatedData)
        //     .then(res => console.log(res))
        //     .catch(error => console.log(error))
        changeProfilePic(user,userImageLink)
        console.log(user)
        setUserImage(0);

    };

    const handleName = async () => {
        let userNameValue = document.getElementById('userNameValue').value; 
        let url = `http://localhost:5000/users?email=${singleUser[0].email}`
        let updatedData = { 'name': userNameValue }
        const res = await axios.patch(url, updatedData)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        setUserName(0);
    };

    const handleEmail = async () => {
        let userEmailValue = document.getElementById('userEmailValue').value;
        console.log(userEmailValue)
        let url = `http://localhost:5000/users?email=${singleUser[0].email}`
        let updatedData = { 'email': userEmailValue }
        const res = await axios.patch(url, updatedData)
            .then(res => {
                console.log(res)
                changeEmail(user, userEmailValue)
            })
            .catch(error => console.log(error))
        refetch()
        setUserEmail(0);
    };

    const handlePassword = async () => {
        let userPasswordValueNew = document.getElementById('userPasswordValueNew').value;

        console.log(userPasswordValueNew);


        let url = `http://localhost:5000/users?email=${singleUser[0].email}`
        let updatedData = { 'password': userPasswordValueNew }
        const res = await axios.patch(url, updatedData)
            .then(res => {
                console.log(res)
                changePassword(user, userPasswordValueNew)
                logOut()
            })
            .catch(error => console.log(error))
        // console.log(user)
        setUserPassword(0);
        navigate('/login')
        // refetch()
    };

    const navigate = useNavigate()

    return (
        <div className='flex-col m-9'>
            <span className='text-xl text-slate-500 font-bold'>Edit Your Profile</span>

            {/* edit image */}
            <div className='mx-auto container max-w-screen-xl flex flex-row mt-9 space-x-12'>
                {
                    userImage === 0 ?

                        <div className='text-xl text-slate-500 font-bold mt-3'>
                            {!singleUser || singleUser.length === 0 ? (
                                <span className="loading loading-ring loading-lg"></span>
                            ) : (
                                singleUser[0].image_link ?
                                    <img src={singleUser[0].image_link} alt="" style={getImageStyle()} />
                                    : <FaUser />

                            )}
                        </div>

                        :

                        <div className='flex space-x-10'>
                            <input type="text" id='userImageLink' placeholder="Enter Image Link" className="input font-bold input-bordered w-full max-w-xs" />
                            <button className="btn btn-neutral" onClick={() => handleImageLink()}>Confirm</button>
                        </div>
                }

                <button className="btn text-lg font-bold" onClick={() => setUserImage(userImage === 0 ? 1 : 0)}>
                    <TbEdit></TbEdit>
                </button>
            </div>

            {/* edit name */}
            <div className='mx-auto container max-w-screen-xl flex flex-row mt-9 space-x-12'>
                {
                    userName === 0 ?
                        <span className='text-xl text-slate-500 font-bold mt-3'>
                            Name : {!singleUser || singleUser.length === 0 ? (
                                <span className="loading loading-ring loading-lg"></span>
                            ) : (
                                singleUser[0].name
                            )}
                        </span>

                        :

                        <div className='flex space-x-10'>
                            <input type="text" id='userNameValue' placeholder="Type here" className="input font-bold input-bordered w-full max-w-xs" />
                            <button className="btn btn-neutral" onClick={() => handleName()}>Confirm</button>
                        </div>

                }


                <button className="btn text-lg font-bold" onClick={() => setUserName(userName === 0 ? 1 : 0)}>
                    <TbEdit></TbEdit>
                </button>
            </div>

            {/* edit email */}
            <div className='mx-auto container max-w-screen-xl flex flex-row mt-9 space-x-12'>
                {
                    userEmail === 0 ? <span className='text-xl text-slate-500 font-bold mt-3'>
                        Email : {!singleUser || singleUser.length === 0 ? (
                            <span className="loading loading-ring loading-lg"></span>
                        ) : (
                            singleUser[0].email
                        )}
                    </span>
                        :
                        <div className='flex space-x-10'>
                            <input type="text" placeholder="Type here" id='userEmailValue' className="font-bold input input-bordered w-full max-w-xs" />
                            <button className="btn btn-neutral" onClick={() => handleEmail()}>Confirm</button>
                        </div>
                }

                <button className="btn text-lg font-bold" onClick={() => setUserEmail(userEmail === 0 ? 1 : 0)}>
                    <TbEdit></TbEdit>
                </button>
            </div>

            {/* edit password */}
            <div className='mx-auto container max-w-screen-xl flex flex-row mt-9 space-x-12'>
                {
                    userPassword === 1 ?

                        <div className='flex space-x-10'>
                            <input type="text" id='userPasswordValueNew' placeholder="New Password" className="font-bold input input-bordered w-full max-w-xs" />
                            <button className="btn text-lg font-bold" onClick={() => handlePassword()}> Confirm Password </button>
                            <button className="btn text-lg font-bold" onClick={() => setUserPassword(userPassword === 0 ? 1 : 0)}> Back </button>
                        </div>
                        :
                        <button className="btn text-lg font-bold" onClick={() => setUserPassword(userPassword === 0 ? 1 : 0)}> Change Password </button>
                }

            </div>
        </div>
    );
};

export default EditProfile;
