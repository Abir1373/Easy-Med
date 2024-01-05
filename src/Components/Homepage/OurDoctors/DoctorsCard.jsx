import doctor_1 from '../../../assets/Homepage/Expert_1.png'
export default function DoctorsCard() {
    return (
        <div>
            <div className="card w-fit bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <img src={doctor_1} alt="Shoes" className="rounded-xl" />
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
                        <button className="btn btn-wide bg-transparent border border-[#F7A582] ">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
