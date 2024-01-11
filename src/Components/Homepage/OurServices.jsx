export default function OurServices() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6 items-center gap-4 my-8'>
            <div className='col-span-3'>
                <img src="https://i.ibb.co/zHfkw0s/Doctor-1.png" alt="" />
            </div>
            <div className='col-span-3 '>
                <div className='space-y-4'>
                    <h2 className='text-4xl text-[#07332F] font-bold'>Our Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className='flex flex-row gap-2 md:gap-6 items-start my-7'>
                    <button className='px-3 py-2 text-white border border-[#F7A582] rounded-md bg-[#F7A582]'>Cavity Protection</button>
                    <button className='px-3 py-2 text-[#F7A582] border border-[#F7A582] rounded-md'>Cosmetic Dentisty</button>
                    <button className='px-3 py-2 text-[#F7A582] border border-[#F7A582] rounded-md'>Oral Surgery</button>
                </div>
                <img src="https://i.ibb.co/b5pV9fv/teeth.png" alt="" />
                <div className='space-y-4 mt-5'>
                    <h2 className='text-2xl font-bold'>Electro Gastrology Therapy</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <button className='px-3 py-2 text-[#F7A582] border border-[#F7A582] rounded-md my-5 btn btn-block bg-transparent'>More Details</button>
            </div>

        </div>
    )
}
