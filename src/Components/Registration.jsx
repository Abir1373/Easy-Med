import sideimg from '../assets/Regpage_vector.svg'
import art from '../assets/Group.svg'
import { NavLink } from 'react-router-dom'
export default function Registration() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-2 bg-[#07332F] py-24'>
                <img src={art} alt="" />
                <img src={sideimg} alt="" className='w-5/6 mx-auto' />
            </div>
            <div className='col-span-2 py-20'>
                <h2 className="text-center font-bold text-3xl mb-5">Sign Up to Doc House</h2>
                <form action="" className='w-2/3 mx-auto space-y-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Name" className='text-[18px] font-bold'>Name</label>
                        <input type="text" placeholder="Enter name" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="username" className='text-[18px] font-bold'>Username</label>
                        <input type="text" placeholder="Enter username" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-[18px] font-bold'>Email</label>
                        <input type="text" placeholder="Enter email" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-[18px] font-bold'>Password</label>
                        <input type="password" placeholder="Enter password" className="text-[#9D9C9C] bg-[#F3F3F3] py-3 px-4 font-[Source Sans 3] text-[16px] rounded" />
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
