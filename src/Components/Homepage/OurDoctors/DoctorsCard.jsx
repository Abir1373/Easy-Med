import { NavLink } from 'react-router-dom'
export default function DoctorsCard({ doctors }) {

    // const { image_link, doctor_name, speciality, email } = doctors

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <img src={`https://i.ibb.co/YB9Mgc6/Expert-1.png`} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Karyen Anderson</h2>
                    <p>BTP - Senior Physiotherapist</p>
                    <div className='space-y-3 flex flex-col'>
                        <p className='inline-flex gap-2 items-center'><i className="fa-solid fa-location-arrow"></i>Dhanmondi, Dhaka, Bangladesh</p>
                        <p className='inline-flex gap-2 items-center'><i className="fa-solid fa-briefcase"></i>Available On Mon, 22 December</p>
                        <p className='inline-flex gap-2 items-center'><i className="fa-solid fa-dollar-sign"></i>$15</p>
                    </div>
                    <div className="card-actions">
                        <NavLink to={"/doctors/1"} className="btn btn-wide bg-transparent border border-[#F7A582] ">View Profile</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
