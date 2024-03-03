import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
export default function Reviews() {
    return (
        <div className="my-8">
            <div className="text-center space-y-5">
                <h2 className="font-bold text-4xl">What Our Patients Says</h2>
                <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='mt-5 flex flex-col md:flex-row gap-4 justify-between items-center'>
                            {/* { patient_1 review } */}
                            <div className='w-full md:w-2/4 items-center border border-[#E6E6E6] shadow-md rounded-md py-10 px-5'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                                        <img src="https://i.ibb.co/m0kkt7K/patient-1.jpg" alt="" />
                                        <div>
                                            <h1 className="font-bold text-xl">Awlad Hossain</h1>
                                            <p>Product Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-quote-left text-7xl text-[#F7A582]"></i>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-gray-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                                </div>
                            </div>

                            {/* { patient_2 review } */}
                            <div className='w-full md:w-2/4 items-center border border-[#E6E6E6] shadow-md rounded-md py-10 px-5'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                                        <img src="https://i.ibb.co/0XwqvJc/patient-2.jpg" alt="" />
                                        <div>
                                            <h1 className="font-bold text-xl">Farhana Hossain</h1>
                                            <p>Brand Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-quote-left text-7xl text-[#F7A582]"></i>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-gray-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mt-5 flex flex-col md:flex-row gap-4 justify-between items-center'>
                            {/* { patient_1 review } */}
                            <div className='w-full md:w-2/4 items-center border border-[#E6E6E6] shadow-md rounded-md py-10 px-5'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                                        <img src="https://i.ibb.co/m0kkt7K/patient-1.jpg" alt="" />
                                        <div>
                                            <h1 className="font-bold text-xl">Awlad Hossain</h1>
                                            <p>Product Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-quote-left text-7xl text-[#F7A582]"></i>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-gray-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                                </div>
                            </div>

                            {/* { patient_2 review } */}
                            <div className='w-2/4 items-center border border-[#E6E6E6] shadow-md rounded-md py-10 px-5'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                                        <img src="https://i.ibb.co/0XwqvJc/patient-2.jpg" alt="" />
                                        <div>
                                            <h1 className="font-bold text-xl">Farhana Hossain</h1>
                                            <p>Brand Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-quote-left text-7xl text-[#F7A582]"></i>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-gray-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
