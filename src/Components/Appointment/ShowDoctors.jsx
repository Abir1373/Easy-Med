import { useState } from "react"
import { useLoaderData, useLocation } from "react-router-dom"
import PagaTitle from "../Shared/PagaTitle"
import Doctorcard from "./Doctorcard"

export default function ShowDoctors() {
    const data = useLoaderData()
    console.log(data)
    const [doctors, setDoctors] = useState(data)
    return (
        <div>
            <PagaTitle MainTitle={"doctors"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-5 gap-4">
                {doctors.map(item => <Doctorcard key={item._id} doctors={item} />)}

            </div>
        </div>
    )
}
