import doctorimg from "../../assets/Homepage/Expert_1.png"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
export default function ProfileCard() {
    return (
        <div>
            <div className="hero bg-base-200 my-8 rounded-md">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctorimg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Dr. Ruby Perrin</h1>
                        <p className="text-gray-400 font-medium">MBBS, MD - General Medicine</p>
                        <div>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={4}
                                readOnly
                            />
                        </div>
                        <p className="py-6">Dhanmondi, Dhaka, Bangladesh - <span className="text-yellow-500 font-bold">Get Directions</span></p>
                        <div className="inline-flex gap-4">
                            <button className="btn border border-black">Teeth Whitneing</button>
                            <button className="btn border border-black">Dental Filling</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
