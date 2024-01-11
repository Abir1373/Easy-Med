
export default function ContactForm() {
    return (
        <div className="my-8 bg-[#07332F] py-24 px-2 md:px-8 rounded-md grid grid-cols-1 md:grid-cols-6 justify-between items-center gap-4">
            <div className="text-white space-y-4 col-span-2 text-center md:text-start w-full">
                <h2 className="text-4xl font-bold capitalize">Contact With Us</h2>
                <p className="text-[18px] w-full lg:w-[285px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <p className="inline-flex gap-3 items-center"><i className="fa-solid fa-phone"></i>+88 01750 14 14 14</p>
                <br />
                <p className="inline-flex gap-3 items-center"><i className="fa-solid fa-location-dot"></i>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className="col-span-4 space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs bg-[#ffffff33]" />
                    <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs bg-[#ffffff33]" />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <input type="number" placeholder="Mobile number" className="input input-bordered w-full max-w-xs bg-[#ffffff33]" />
                    <input type="text" placeholder="doctor name" className="input input-bordered w-full max-w-xs bg-[#ffffff33]" />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs bg-[#ffffff33]" />
                    <input type="text" placeholder="time" className="input input-bordered w-full max-w-xs bg-[#ffffff33]" />
                </div>
                <input type="submit" value="Register" className="btn btn-block bg-[#F7A582] text-white rounded-md border-none" />

            </div>
        </div>
    )
}
