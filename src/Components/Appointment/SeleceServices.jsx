import Servicecard from "./Servicecard";

export default function SeleceServices() {
    return (
        <div className="my-8">
            <p className="text-center text-[#F7A582]">Available Services on April 30, 2022</p>
            <h2 className="font-bold text-center text-4xl">Please select a service.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-5">
                <Servicecard />
                <Servicecard />
                <Servicecard />
            </div>
        </div>
    )
}
