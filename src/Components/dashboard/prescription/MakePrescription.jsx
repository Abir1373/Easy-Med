import React from 'react'
import PagaTitle from '../../Shared/PagaTitle'
import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import axios from 'axios'

export default function MakePrescription() {
    const patientEmail = useLoaderData()
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const newdata = {
            'patient_email': patientEmail,
            'doctor-email': user.email,
            'prescription': data.prescription
        }

        const res = axios.post('http://localhost:5000/prescription_collection', newdata)
    }
    return (
        <div>
            <PagaTitle MainTitle={"Prescription"} />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center items-center my-9'>

                    <input type="text" {...register("prescription", { required: true })} placeholder="prescribe medicine" className="input input-bordered input-lg w-3/5 h-32 " />
                    {errors.prescription?.type === 'required' && <p className='font-bold text-xl text-red-600'>required</p>}

                </div>
                <button
                    type="submit"
                    className="h-16 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>



        </div>
    )
}
