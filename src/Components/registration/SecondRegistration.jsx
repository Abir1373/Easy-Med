import sideimg from '../../assets/Regpage_vector.svg'
import art from '../../assets/Group.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export default function SecondRegistration() {
    let specialityArray = ['Cardiology', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'Hematology', 'Nephrology', 'Neurology', 'Oncology', 'Orthopedics', 'Pediatrics', 'Psychiatry', 'Pulmonology', 'Rheumatology', 'Allergy and Immunology', 'Emergency Medicine', 'Anesthesiology', 'Radiology', 'Urology', 'Ophthalmology', 'Gynecology', 'Obstetrics', 'Geriatrics', 'Pathology', 'Infectious Disease', 'Nuclear Medicine', 'Medical Genetics', 'Sports Medicine', 'Vascular Surgery', 'Physical Medicine and Rehabilitation']
    const navigate = useNavigate()



    const handleReg = e => {
        e.preventDefault()
        const form = e.target
        const doctor_name = form.doctor_name.value
        const speciality = form.speciality.value
        const email = form.email.value
        const password = form.password.value
        const image_link = form.image_link.value
        const designation = form.designation.value
        const fee = form.fee.value
        const degree = form.degree.value
        const resume = form.resume.value
        // console.log(doctor_name,speciality,email,image_link,designation,fee,degree)
        let DoctorInfo = {
            'doctor_name': doctor_name,
            'speciality': speciality,
            'email': email,
            'image_link': image_link,
            'designation': designation,
            'fee': fee,
            'degree': degree,
            'resume': resume,
            'password': password
        }
        console.log(DoctorInfo)
        axios.post(`http://localhost:5000/doctor_request`, DoctorInfo)
            .then((res) => {
                console.log(res)
            })
        // navigate('/')
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-2 bg-[#07332F] py-16'>
                <img src={art} alt="" />
                <img src={sideimg} alt="" className='w-5/6 mx-auto' />
            </div>
            <div className='col-span-2 py-20'>
                <h2 className="text-center font-bold text-3xl mb-5">Sign Up to Doc House</h2>
                <form className="max-w-sm mx-auto" onSubmit={handleReg}>

                    <div className="mb-5">
                        <label htmlFor="doctor_name" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Name
                        </label>
                        <input
                            name='doctor_name'
                            type="text"
                            id="doctor_name"
                            placeholder="Enter your name"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="speciality" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Speciality
                        </label>
                        <select className="select select-bordered w-full sm:max-w-xm h-16 text-2xl" name='speciality' id="speciality">
                            {specialityArray.map((speciality, index) => (
                                <option key={index}>{speciality}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Email Address
                        </label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Password
                        </label>
                        <input
                            name='password'
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>


                    <div className="mb-5">
                        <label htmlFor="image_link" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Image Link
                        </label>
                        <input
                            name='image_link'
                            type="text"
                            id="image_link"
                            placeholder="Enter your Image Link"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="designation" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Previous Designation/s
                        </label>
                        <input
                            name='designation'
                            type="text"
                            id="designation"
                            placeholder="Your Desingnation"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="fee" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Fee
                        </label>
                        <input
                            name='fee'
                            type="text"
                            id="fee"
                            placeholder="Enter your fee"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="degree" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Degree
                        </label>
                        <input
                            name='degree'
                            type="text"
                            id="degree"
                            placeholder="Enter your degree"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="resume" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Upload Your CV/Resume
                        </label>
                        <input
                            name='resume'
                            type="text"
                            id="resume"
                            placeholder="Enter your resume"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />

                    </div>



                    {/* <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="h-16 text-xl w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Remember me
                        </label>
                    </div> */}
                    <button
                        type="submit"
                        className="h-16 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                    <div className='text-center text-xl mt-5'>
                        Please register at first. Go to <Link to='/login'><span className='text-2xl font-bold text-orange-300'>SIGN IN</span></Link>
                    </div>
                </form>
            </div>

        </div>
    )
}
