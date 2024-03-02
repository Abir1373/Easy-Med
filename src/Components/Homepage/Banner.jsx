import { useNavigate } from "react-router-dom"

export default function Banner() {
    const navigate = useNavigate()
    return (
        <div className="bg-[#07332F] px-10 py-36 flex flex-col-reverse md:flex-row justify-evenly items-center">
            <div className="text-[#F3F3F3] space-y-5">
                <h2 className="text-7xl font-bold leading-[95px]">Your Best Medical Help Center</h2>
                <p>Always ready to serve you with the best care.</p>
                <button className="bg-[#F7A582] px-8 py-4 rounded-md text-xl font-semibold" onClick={() => {
                    navigate(`/appointment`)
                }}>All services</button>
            </div>
            <div>
                <img src="https://i.ibb.co/RDkXtDJ/bannerimg-1.png" alt="" />
            </div>
        </div>
    )
}
