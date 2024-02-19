import { Link } from "react-router-dom";

export default function Servicecard({ value}) {
    return (
        <div className='border-2 border-green-600 rounded-md text-center px-3 py-4'>
            <Link to={`/services/${value}`} className="text-green-900 font-bold text-xl cursor-pointer hover:underline">{value}</Link>

        </div >
    )
}
