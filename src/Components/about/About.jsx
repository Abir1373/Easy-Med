import React from 'react';
import PagaTitle from '../Shared/PagaTitle';


const About = () => {
    return (
        <>

            <PagaTitle MainTitle={"About us"} />
            <div className="mx-4 lg:mx-48 space-y-10">

                <div className='text-center my-6'>
                    <p className='font-bold text-4xl my-2'>We are Easy Medicine </p>
                    <p className='text-gray-500 '>Easy Medicine is a 500+ beds care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improving the lives of people through utmost service excellence since its inception on 2009. Easy Medicine is one of the ventures of Popular Group which is the top Medical business group of the country.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
                    <div className="card card-compact w-full h-[407px] bg-base-100 mx-auto border border-blue-400">
                        <figure><img src="https://i.ibb.co/FgH3428/mission.jpg" alt="Shoes" className='h-[260px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl">Our mission</h2>
                            <p>Our mission is to make the journey from patient to doctor appointment easier than they think it about.</p>
                        </div>
                    </div>

                    <div className="card card-compact w-full h-[407px] bg-base-100 mx-auto">
                        <figure><img src="https://i.ibb.co/zJqnT0c/vision.jpg" alt="Shoes" className='h-[260px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Our vision</h2>
                            <p>To establish an environment around the hospital field through the highest level of innovative and technical support which will add value to our society and act as a driven force of our humanity.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;