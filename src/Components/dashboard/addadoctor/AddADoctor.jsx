import React from 'react';
import { LuImagePlus } from "react-icons/lu";


const AddADoctor = () => {
    return (
        <div className='h-3/5'>
            <div className='text-4xl pl-9 pt-6 ml-5 font-bold'>Add a New Doctor</div>
            <form className='flex  flex-col text-2xl m-14 space-y-5'>


                {/* name */}

                <label className='font-bold'>Name</label>
                <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full sm:max-w-xm px-5 py-4 h-16 text-2xl" />

                {/* email */}

                <label className='font-bold'>Email</label>
                <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full sm:max-w-xm px-5 py-4 h-16 text-2xl" />

                {/* speciality */}

                <label className='font-bold'>Speciality</label>

                <select className="select select-bordered w-full sm:max-w-xm h-16 text-2xl">
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Endocrinology</option>
                    <option>Gastroenterology</option>
                    <option>Hematology</option>
                    <option>Nephrology</option>
                    <option>Neurology</option>
                    <option>Oncology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>Psychiatry</option>
                    <option>Pulmonology</option>
                    <option>Rheumatology</option>
                    <option>Allergy and Immunology</option>
                    <option>Emergency Medicine</option>
                    <option>Anesthesiology</option>
                    <option>Radiology</option>
                    <option>Urology</option>
                    <option>Ophthalmology</option>
                    <option>Gynecology</option>
                    <option>Obstetrics</option>
                    <option>Infectious Disease</option>
                    <option>Geriatrics</option>
                    <option>Physical Medicine and Rehabilitation</option>
                    <option>Nuclear Medicine</option>
                    <option>Pathology</option>
                    <option>Medical Genetics</option>
                    <option>Sports Medicine</option>
                    <option>Vascular Surgery</option>

                </select>



                {/* add photo */}

                <div className='h-40 mt-5 border rounded-lg border-4 border-dashed border-slate-300 border-opacity-50 flex flex-col items-center justify-center space-y-5'>
                    <h2 className='text-3xl text-slate-300'>Upload A Photo</h2>
                    <div className='text-5xl text-slate-300'>  <LuImagePlus /> </div>

                </div>


                {/* input submit button */}

                <input type="submit" value="Add" className='text-xl h-16 w-full border border-2 bg-green-900 text-white' />




            </form>
        </div>
    );
};

export default AddADoctor;