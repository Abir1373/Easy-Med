import { useLoaderData } from "react-router-dom"
import PagaTitle from "../Shared/PagaTitle"
import useAuth from "../Hooks/useAuth"
import { useForm } from "react-hook-form"

export default function MakeAppointment() {
    const doctorinfo = useLoaderData()
    const { user } = useAuth()
    const { register,
        formState: { errors },
        handleSubmit, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <PagaTitle MainTitle={"Make your appointment"} />
            {/* form */}
            <h2 className="text-center font-bold text-5xl capitalize my-12">Provide the information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="my-2 px-2 md:px-8 rounded-md" >
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <input type="text" placeholder="Name" className="input input-bordered w-full bg-[#ffffff33]" defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 30 })} />
                        {errors.name && <p className="text-red-400 font-medium">required</p>}
                        <input type="email" placeholder="Email" className="input input-bordered w-full bg-[#ffffff33]" defaultValue={user?.email} {...register("email")} />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <input type="number" placeholder="Mobile number" className="input input-bordered w-full bg-[#ffffff33]" {...register("phone", { required: true, maxLength: 11 })} />
                        {errors.phone && <p className="text-red-400 font-medium">required</p>}
                        <input type="text" placeholder="doctor name" className="input input-bordered w-full bg-[#ffffff33]" defaultValue={doctorinfo[0].doctor_name} {...register("doctorName")} />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <input type="number" placeholder="fee" className="input input-bordered w-full bg-[#ffffff33]" defaultValue={doctorinfo[0].fee} {...register("fees")} />
                        <input type="text" placeholder="prefered time" className="input input-bordered w-full bg-[#ffffff33]" {...register("time")} {...register("time")} />
                        {errors.time && <p className="text-red-400 font-medium">required</p>}
                    </div>
                    <input type="submit" value="Register" className="btn btn-block bg-[#F7A582] text-white rounded-md border-none" />

                </div>
            </form>
        </div>
    )
}
