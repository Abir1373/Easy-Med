import bannerimg_1 from '../../assets/bannerimg_1.png'
export default function Banner() {
    return (
        <div className="bg-[#07332F] px-10 py-36 flex flex-col-reverse md:flex-row justify-evenly items-center">
            <div className="text-[#F3F3F3] space-y-5">
                <h2 className="text-7xl font-bold leading-[95px]">Your Best Medical Help Center</h2>
                <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                <button className="bg-[#F7A582] px-8 py-4 rounded-md text-xl font-semibold">All services</button>
            </div>
            <div>
                <img src={bannerimg_1} alt="" />
            </div>
        </div>
    )
}