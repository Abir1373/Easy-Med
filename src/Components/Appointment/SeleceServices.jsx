import getDoctors from "../../api/getDoctors";
import Servicecard from "./Servicecard";

export default function SeleceServices() {
    const [doctors, refetch] = getDoctors()
    let mp = {}
    if (doctors && doctors.length) {
        for (let i = 0; i < doctors.length; i++) {
            if (!mp[doctors[i].speciality]) {
                mp[doctors[i].speciality] = 1;
            }
        }
    }
    return (
        <div className="my-8">
            <p className="text-center text-[#F7A582]">Available Services on April 30, 2022  </p>
            <h2 className="font-bold text-center text-4xl">Please select a service.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-5 gap-4">
                {doctors ? doctors.map(item => <Servicecard key={item._id} doctors={item} />

                )
                    :
                    <progress className="progress progress-success w-56" value="100" max="100"></progress>}
            </div>
        </div>
    )
}
