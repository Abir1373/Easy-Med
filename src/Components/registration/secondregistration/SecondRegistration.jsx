import React from 'react';

import sideimg from '../../../assets/Regpage_vector.svg'
import art from '../../../assets/Group.svg'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios';

export default function SecondRegistration() {

    let specialities = [
        "Allergy & Immunology",
        "Anesthesiology",
        "Cardiology",
        "Dermatology",
        "Emergency Medicine",
        "Endocrinology",
        "Family Medicine",
        "Gastroenterology",
        "Hematology",
        "Infectious Disease",
        "Internal Medicine",
        "Nephrology",
        "Neurology",
        "Obstetrics & Gynecology",
        "Oncology",
        "Ophthalmology",
        "Orthopedics",
        "Otolaryngology (ENT)",
        "Pathology",
        "Pediatrics",
        "Physical Medicine & Rehabilitation",
        "Plastic Surgery",
        "Psychiatry",
        "Pulmonology",
        "Radiology",
        "Rheumatology",
        "Urology",
    ]

    const navigate = useNavigate()
    const handleReg = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const speciality = form.speciality.value
        const designation = form.designation.value
        const fee = form.fee.value
        const degree = form.degree.value
        const image_link = form.imageLink.value
        
        console.log(name, email, password, speciality, designation, degree, fee , image_link)

        const doctorInfo = {
            'name': name,
            'password': password,
            'speciality': speciality,
            'email': email,
            'designation': designation,
            'ratings': 0.0,
            'fee': fee,
            'degree': degree,
            'image_link': image_link
        }

        // console.log(doctorInfo)

        axios.post(`http://localhost:5000/doctor_request`,doctorInfo)
            .then(res=>console.log(res))
            .catch(error=>console.log(error))

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
                        <label htmlFor="name" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Name
                        </label>
                        <input
                            name='name'
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
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
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-xl font-bold">
                            Your password
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
                        <label htmlFor="speciality" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Speciality
                        </label>
                        <select id="specialty" name='speciality' className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {specialities.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>


                    <div className="mb-5">
                        <label htmlFor="imageLink" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Image Link
                        </label>
                        <input
                            name='imageLink'
                            type="text"
                            id="imageLink"
                            placeholder="Enter your image link"
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>


                    <div className="mb-5">
                        <label htmlFor="designation" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Previous Designation
                        </label>
                        <input
                            name='designation'
                            type="text"
                            id="designation"
                            placeholder="Enter your designation"
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
                        <label htmlFor="fee" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Fee
                        </label>
                        <input
                            name='fee'
                            type="number"
                            id="fee"
                            placeholder="Enter your fee"
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
