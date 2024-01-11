import sideimg from '../assets/Regpage_vector.svg'
import art from '../assets/Group.svg'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Registration() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-2 bg-[#07332F] py-16'>
                <img src={art} alt="" />
                <img src={sideimg} alt="" className='w-5/6 mx-auto' />
            </div>
            <div className='col-span-2 py-20'>
                <h2 className="text-center font-bold text-3xl mb-5">Sign Up to Doc House</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)} className='w-2/3 mx-auto space-y-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Name" className='text-[18px] font-bold'>Name</label>
                        <input type="text" placeholder="Enter name" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" {...register("name", { required: true })} />
                        {errors.name && <p role="alert" className='text-red-500 font-semibold'>Name is required</p>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="username" className='text-[18px] font-bold'>Username</label>
                        <input type="text" placeholder="Enter username" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" {...register("username", { required: true })} />
                        {errors.username && <p role="alert" className='text-red-500 font-semibold'>{errors.username.message}</p>}
                        {errors.username && <p role="alert" className='text-red-500 font-semibold'>username is required</p>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-[18px] font-bold'>Email</label>
                        <input type="email" placeholder="Enter email" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" {...register("email", { required: true })} />
                        {errors.email && <p role="alert" className='text-red-500 font-semibold'>Email is required</p>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-[18px] font-bold'>Password</label>
                        <input type="password" placeholder="Enter password" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" {...register("password", { required: true })} />
                        {errors.password && <p role="alert" className='text-red-500 font-semibold'>password is required</p>}
                    </div>
                    <div>
                        <input type="submit" value="Register" className='btn btn-block bg-[#F7A582] rounded-md text-white text-[18px]' />
                        <p className='text-gray-500 text-center mt-2'>Already registered? Go to <NavLink to={"/login"} className='text-[#F7A582] font-bold'>SIGN IN</NavLink></p>
                    </div>
                </form>
            </div>

        </div>
    )
}
