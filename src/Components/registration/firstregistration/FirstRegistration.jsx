import sideimg from '../../../assets/Regpage_vector.svg'
import art from '../../../assets/Group.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import axios from 'axios';
import { useForm } from 'react-hook-form'

export default function FirstRegistration() {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const UserInfo = {
            'name': data.name,
            'username': data.username,
            'email': data.email,
            'password': data.password,
            'user_role': 'user',
        }
        console.log(UserInfo)
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                axios.post(`http://localhost:5000/users`, UserInfo)
                    .then((res) => {
                        console.log(res)
                        navigate('/')
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-2 bg-[#07332F] py-16'>
                <img src={art} alt="" />
                <img src={sideimg} alt="" className='w-5/6 mx-auto' />
            </div>
            <div className='col-span-2 py-20'>
                <h2 className="text-center font-bold text-3xl mb-5">Sign Up to Doc House</h2>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-5">
                        <label htmlFor="email" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            {...register("name", { required: true, maxLength: 40, pattern: /[A-Za-z]{5,}/gm })}
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.name?.type === 'required' && <p className='font-bold text-xl text-red-600'>required</p>}
                        {errors.name?.type === 'pattern' && <p className='font-bold text-xl text-red-600'>only characters allowed</p>}
                        {errors.name?.type === 'maxLength' && <p className='font-bold text-xl text-red-600'>not more than 40 character</p>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="font-bold block mb-2 text-sm font-medium text-xl">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            {...register("username", { required: true, maxLength: 12, pattern: /[A-Za-z]{5,}/gm })}
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.username?.type === 'required' && <p className='font-bold text-xl text-red-600'>required</p>}
                        {errors.username?.type === 'pattern' && <p className='font-bold text-xl text-red-600'>only characters allowed</p>}
                        {errors.username?.type === 'maxLength' && <p className='font-bold text-xl text-red-600'>not more than 12 character</p>}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="font-bold block mb-2 text-sm font-medium text-xl">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.email?.type === 'required' && <p className='font-bold text-xl text-red-600'>required</p>}
                        {errors.email?.type === 'pattern' && <p className='font-bold text-xl text-red-600'>please provide valid email</p>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-xl font-bold">
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/ })}
                            className="h-16 text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.password?.type === 'required' && <p className='font-bold text-xl text-red-600'>required</p>}
                        {errors.password?.type === 'pattern' && <p className='font-bold text-xl text-yellow-500'>Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be at least 8 characters long.</p>}
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
