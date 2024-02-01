import getDoctors from "../../../api/getDoctors";
import DoctorsCard from "./DoctorsCard";

export default function ExpertDoctors() {
    const [doctors, refetch] = getDoctors()
    console.log(doctors)
    const cardData = doctors.slice(3)
    return (
        <div className="my-8">
            <div className="text-center space-y-5">
                <h2 className="font-bold text-4xl">Our Expert Doctors</h2>
                <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 items-center">
                <DoctorsCard />
                <DoctorsCard />
                <DoctorsCard />
            </div>
        </div>
    )
}
