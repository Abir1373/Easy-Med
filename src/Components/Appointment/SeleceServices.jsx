import getDoctors from "../../api/getDoctors";
import Servicecard from "./Servicecard";

export default function SeleceServices() {
    const [doctors, refetch] = getDoctors()
    let specialities = []
    let mp = {}
    if (doctors && doctors.length) {
        for (let i = 0; i < doctors.length; i++) {
            if (!mp[doctors[i].speciality]) {
                mp[doctors[i].speciality] = 1;
            }
        }
    }
    specialities = Object.keys(mp);
    console.log(specialities)
    if(!specialities || specialities.length===0)
    {
        <span className="loading loading-ball loading-lg"></span>
    }

    return (
        <div className="my-8">
            <p className="text-center text-[#F7A582]">Available Services on April 30, 2022  </p>
            <h2 className="font-bold text-center text-4xl">Please select a service.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-5 gap-4">
                {
                    specialities.map((item,index)=><Servicecard key={index} item={item}></Servicecard>)
                }
            </div>
        </div>
    )
}
