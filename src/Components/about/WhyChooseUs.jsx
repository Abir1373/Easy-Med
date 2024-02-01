import React from 'react';
import { AiTwotoneLike } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { GiNorthStarShuriken } from "react-icons/gi";
const WhyChooseUs = () => {
    return (
        <div className='flex flex-col mb-9'>
            <div className='text-center text-5xl py-5 px-5 font-bold'>Why Choose Us ? </div>
            <div className="flex flex-row gap-8">

                <div className='rounded-md p-4 flex flex-col justify-evenly  w-full md:w-1/3 gap-3'>

                    <div className='space-y-10 flex flex-col justify-center items-center text-center'>
                        <p className='text-6xl'><AiTwotoneLike /></p>
                        <p className='text-orange-400 text-2xl font-bold'>Fruity Delights: Freshness Preserved</p>
                        <p className=' text-2xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vero quae voluptate ea explicabo eveniet dignissimos. Commodi illo mollitia similique consequatur fugiat ad ipsa incidunt a molestiae eos inventore iusto alias ut minus, esse ullam asperiores dolorem odio voluptatem nobis et nemo rerum totam! Quibusdam reprehenderit iure eveniet voluptates vitae!
                        </p>
                    </div>
                </div>


                <div className='rounded-md p-4 flex flex-col justify-evenly  w-full md:w-1/3 gap-3'>

                    <div className='space-y-10 flex flex-col justify-center items-center text-center'>
                        <p className='text-6xl'><FaTruck /></p>
                        <p className='text-orange-400 text-2xl font-bold'>Fruity Delights: Freshness Preserved</p>
                        <p className=' text-2xl'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid inventore ratione nulla? Totam possimus corporis esse, ad quas enim, obcaecati animi in aliquid ipsam illo incidunt assumenda nesciunt. Velit ratione consectetur accusantium nobis, fugit vitae minus similique distinctio earum ex asperiores! Quis inventore aspernatur incidunt reprehenderit, nemo cumque repellendus quisquam?
                        </p>
                    </div>
                </div>



                <div className='rounded-md p-4 flex flex-col justify-evenly  w-full md:w-1/3 gap-3'>

                    <div className='space-y-10 flex flex-col justify-center items-center text-center'>
                        <p className='text-6xl'><GiNorthStarShuriken /></p>
                        <p className='text-orange-400 text-2xl font-bold'>Fruity Delights: Freshness Preserved</p>
                        <p className=' text-2xl'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad rerum, porro eius error laboriosam molestias quia sunt architecto temporibus adipisci quae aliquid omnis blanditiis veniam consequatur sequi, mollitia modi neque commodi obcaecati libero voluptates deleniti deserunt velit. Laborum tempore repudiandae consequuntur magnam aperiam laboriosam blanditiis odio, eos velit placeat amet?
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WhyChooseUs;