
export default function OurTiming() {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
            <div className='bg-green-950 rounded-md p-4 flex flex-row justify-evenly text-white w-full md:w-1/3 gap-3'>
                <div>
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div>
                    <h2>Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='bg-[#F7A582] rounded-md p-4 flex flex-row justify-evenly text-white w-full md:w-1/3 gap-3'>
                <div>
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div>
                    <h2>Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='bg-green-950 rounded-md p-4 flex flex-row  text-white w-full md:w-1/3 gap-3'>
                <div>
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <p>+88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    )
}
