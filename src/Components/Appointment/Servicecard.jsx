import { Link } from "react-router-dom";

export default function Servicecard({ doctors }) {
    return (
        <div className='border-2 border-green-600 rounded-md text-center px-3 py-4'>
            <Link to={`/services/${doctors.speciality}`} className="text-green-900 font-bold text-xl cursor-pointer hover:underline">{doctors.speciality}</Link>

        </div >
    )
}
